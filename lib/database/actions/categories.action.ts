"use server";

import { connectToDatabase } from "../connect";
import Category from "../models/category.model";

export async function getAllCategories() {
  try {
    await connectToDatabase();
    const categories = await Category.find({}).sort({ updatedAt: -1 }).lean();
    return JSON.parse(JSON.stringify({ categories }));
  } catch (error: any) {
    console.log(error);
  }
}
