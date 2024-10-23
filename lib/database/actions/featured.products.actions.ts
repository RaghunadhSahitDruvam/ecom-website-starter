"use server";

import { connectToDatabase } from "../connect";
import Category from "../models/category.model";
import Product from "../models/product.model";

export async function getAllFeaturedProducts() {
  try {
    await connectToDatabase();
    const featuredProducts = await Product.find({ featured: true }).populate({
      path: "category",
      model: Category,
    });
    return {
      featuredProducts: JSON.parse(JSON.stringify(featuredProducts)),
      success: true,
    };
  } catch (error: any) {
    console.log(error);
  }
}
