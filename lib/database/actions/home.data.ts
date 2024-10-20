"use server";

import { connectToDatabase } from "../connect";
import Category from "../models/category.model";
import Product from "../models/product.model";

export const GetDataforHomePage = async () => {
  try {
    await connectToDatabase();
    const [newProducts, popularProducts, topSellingProducts, categories] =
      await Promise.all([
        Product.find().sort({ createdAt: -1 }).limit(5),
        Product.find()
          .sort({ rating: -1, "subProducts.sold": -1 })
          .limit(5)
          .lean(),
        Product.find().sort({ "subProducts.sold": -1 }).limit(5).lean(),
        Category.find().lean().limit(5),
      ]);
    return {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      popularProducts: JSON.parse(JSON.stringify(popularProducts)),
      topSellingProducts: JSON.parse(JSON.stringify(topSellingProducts)),
      categories: JSON.parse(JSON.stringify(categories)),
    };
  } catch (error: any) {
    console.log(error);
  }
};
