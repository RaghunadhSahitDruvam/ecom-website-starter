"use server";

import { connectToDatabase } from "@/lib/database/connect";
import TopBar from "@/lib/database/models/topbar.model";
export const createTopBar = async (
  name: string,
  color: string,
  btnText: string,
  btnColor: string,
  btnLink: string
) => {
  try {
    await connectToDatabase();
    if (!name) {
      return {
        message: "Please provide name.",
        status: 404,
        success: false,
      };
    }
    await new TopBar({
      title: name,
      color,
      "button.title": btnText,
      "button.color": btnColor,
      "button.link": btnLink,
    }).save();
    const topbars = await TopBar.find().sort({ updatedAt: -1 });
    return {
      topbars: JSON.parse(JSON.stringify(topbars)),
    };
  } catch (error: any) {
    console.log(error);
  }
};
export const deleteTopBar = async (topBarId: string) => {
  try {
    await connectToDatabase();
    const topBar = await TopBar.findByIdAndDelete(topBarId);
    if (!topBar) {
      return {
        message: "No TopBar found with this Id!",
        success: false,
      };
    }
    const topBars = await TopBar.find({}).sort({
      updateAt: -1,
    });
    return {
      message: "Successfully deleted!",
      topbars: topBars,
      success: true,
    };
  } catch (error: any) {
    console.log(error);
  }
};
export const updateTopBar = async (
  topBarId: string,
  name: string,
  color: string,
  btnText: string,
  btnColor: string,
  btnLink: string
) => {
  try {
    await connectToDatabase();
    if (!name) {
      return {
        message: "Please provide name.",
        status: 404,
        success: false,
      };
    }
    const topBar = await TopBar.findByIdAndUpdate(topBarId, {
      title: name,
      color,
      "button.title": btnText,
      "button.color": btnColor,
      "button.link": btnLink,
    });
    if (!topBar) {
      return {
        message: "No TopBar found with this Id.",
        success: false,
      };
    }
    const topBars = await TopBar.find().sort({
      updatedAt: -1,
    });
    return {
      message: "Successfully updated!",
      success: true,
      topbars: topBars,
    };
  } catch (error: any) {
    console.log(error);
  }
};
export const getAllTopBars = async () => {
  try {
    await connectToDatabase();
    const topbars = await TopBar.find({}).sort({ updatedAt: -1 }).lean();
    if (!topbars) {
      return {
        message: "No topbars found!",
        success: false,
      };
    }
    return {
      topbars: JSON.parse(JSON.stringify(topbars)),
      message: "Successfully fetched all topbars",
      success: true,
    };
  } catch (error: any) {
    console.log(error);
  }
};
