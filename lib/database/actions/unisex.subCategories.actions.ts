"use server";

import { connectToDatabase } from "../connect";
import SubCategory from "../models/subCategory.model";

export const getAllSubCateGoriesForUnisex = async () => {
  try {
    await connectToDatabase();
    const subCategoriesForUnisex = await SubCategory.find({
      parent: "6717a650ec2516d2f2b09c03",
    }).lean();
    return JSON.parse(JSON.stringify(subCategoriesForUnisex));
  } catch (error: any) {
    console.log(error);
  }
};
