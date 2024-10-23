"use server";
// for website:
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME as string,
  api_key: process.env.CLOUNDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_SECRET as string,
});
// for website:
export const fetchAllWebsiteBanners = async () => {
  try {
    const result = await cloudinary.api.resources_by_tag("website_banners", {
      type: "upload",
      max_results: 100, // Adjust this as needed
    });

    return result.resources.map((i, index) => i.url);
  } catch (error: any) {
    console.log("Error fetching app banners:", error);
  }
};

// for app:
export const fetchAllAppBanners = async () => {
  try {
    const result = await cloudinary.api.resources_by_tag("app_banners", {
      type: "upload",
      max_results: 100, // Adjust this as needed
    });

    return result.resources.map((i, index) => i.url);
  } catch (error: any) {
    console.log("Error fetching app banners:", error);
  }
};
