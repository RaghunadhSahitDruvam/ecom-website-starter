"use server";

import { connectToDatabase } from "../connect";
import Order from "../models/order.model";
import User from "../models/user.model";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import Email from "@/lib/emails";
export async function createOrder({
  products,
  shippingAddress,
  paymentMethod,
  total,
  totalBeforeDiscount,
  couponApplied,
  user_id,
  totalSaved,
}: {
  products: any;
  shippingAddress: any;
  paymentMethod: any;
  total: any;
  totalBeforeDiscount: any;
  couponApplied: any;
  user_id: any;
  totalSaved: number;
}) {
  try {
    await connectToDatabase();
    const user = await User.findById(user_id);
    if (!user) {
      return {
        message: "User not found with provided ID!",
        status: 404,
      };
    }
    const newOrder = await new Order({
      user: user._id,
      products,
      shippingAddress,
      paymentMethod,
      total,
      totalBeforeDiscount,
      couponApplied,
      totalSaved,
    }).save();
    let config = {
      service: "gmail",
      auth: {
        user: "mvsrcm@gmail.com",
        pass: "qvlcgbsvdossywnr",
      },
    };
    let transporter = nodemailer.createTransport(config);

    let message = {
      from: "mvsrcm@gmail.com",
      to: user.email,
      subject: "Order Confirmation",
      html: render(Email({ orderData: newOrder })),
    };
    await transporter
      .sendMail(message)
      .then(() => {
        return {
          message: "You should receive an email",
        };
      })
      .catch((err) => console.log(err));
    return {
      order_id: JSON.parse(JSON.stringify(newOrder._id)),
    };
  } catch (error: any) {
    console.log(error);
  }
}
export async function getOrderDetailsById(id: string) {
  try {
    await connectToDatabase();
    const orderData = await Order.findById(id)
      .populate({ path: "user", model: User })
      .lean();
    if (!orderData) {
      return {
        message: "Order not found!",
        status: 404,
      };
    } else {
      return JSON.parse(JSON.stringify(orderData));
    }
  } catch (error: any) {
    console.log(error);
  }
}
