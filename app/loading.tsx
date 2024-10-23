"use client";
import { Loader } from "lucide-react";
export default function Loading() {
  return (
    <div className="gap-[10px] fixed top-0 right-0 bottom-0 left-0 bg-[#ffffff] p-[30px] shadow-2xl z-1000 grid place-items-center ">
      <div className="p-[30px] rounded-md  shadow-2xl">
        <div className="">
          <div className="flex justify-center items-center">
            {" "}
            <Loader className="animate-spin flex justify-center items-center" />
          </div>
          <span className="flex justify-center items-center text-sm">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
