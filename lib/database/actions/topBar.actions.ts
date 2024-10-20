"use server";

import { handleError } from "@/lib/utils";
import { connectToDatabase } from "../connect";
import TopBar from "../models/topbar.model";

export async function getTopBar() {
  try {
    await connectToDatabase();
    const topBar = await TopBar.find({});
    return JSON.parse(JSON.stringify(topBar));
  } catch (error: any) {
    handleError(error);
  }
}
