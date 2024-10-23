"use server";

import { connectToDatabase } from "@/lib/database/connect";
import HomeScreenOffer from "../models/homescreenoffers.model";

// Get all offers for the home screen
export const getAllSpecialComboOffers = async () => {
  try {
    await connectToDatabase();
    const offers = await HomeScreenOffer.find({
      offerType: "specialCombo",
    }).sort({ updatedAt: -1 });
    return {
      offers: JSON.parse(JSON.stringify(offers)),
      message: "Successfully fetched specialCombo offers.",
      success: true,
    };
  } catch (error: any) {
    console.log(error);
  }
};
// Get all offers for the home screen
export const getAllCrazyDealOffers = async () => {
  try {
    await connectToDatabase();
    const offers = await HomeScreenOffer.find({ offerType: "crazyDeal" }).sort({
      updatedAt: -1,
    });
    return {
      offers: JSON.parse(JSON.stringify(offers)),
      message: "Successfully fetched crazyDeal offers.",
      success: true,
    };
  } catch (error: any) {
    console.log(error);
  }
};
