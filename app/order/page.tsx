import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto bg-white shadow-md">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Home</span>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">THANK YOU SREERAM MV</h1>
              <p className="text-gray-600">Order ID: NH-2047183</p>
            </div>
            {/* Order Details Section */}
            <div className="mb-6 border rounded-lg overflow-hidden">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b sm:border-b-0 sm:border-r">
                  <div className="font-semibold text-sm mb-1">
                    ORDER NUMBER:
                  </div>
                  <div>NH-2047183</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 border-b md:border-b-0 md:border-r">
                  <div className="font-semibold text-sm mb-1">DATE:</div>
                  <div>May 3, 2024</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 p-4 sm:border-r">
                  <div className="font-semibold text-sm mb-1">EMAIL:</div>
                  <div className="truncate">sreeram.mv@email.com</div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                  <div className="font-semibold text-sm mb-1">TOTAL:</div>
                  <div>₹404.00</div>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="font-semibold text-sm mb-1">
                  PAYMENT METHOD:
                </div>
                <div>Cash on Delivery (COD)</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold">
                      Your order is confirmed
                    </h2>
                    <p className="text-gray-600">
                      Order will be delivered to you in 2-3 days on following
                      address
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Sreeram Mv</span>
                    <span className="text-gray-600">7780407705</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    D.NO 85-27-2/2, PLOT NO 157, RTC COLONY,
                    <br />
                    OPP. BEST PRICE, RAJAMAHENDRAVARAM,
                    <br />
                    EAST GODAVARI DISTRICT,
                    <br />
                    ANDHRAPRADESH , NEAR JN ROAD
                    <br />
                    Godavari, Andhra Pradesh - 533106
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">1 Item</span>
                    <span className="font-medium">₹ 334</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg"
                      alt="Product Image"
                      width={60}
                      height={60}
                      className="mr-4"
                    />
                    <div>
                      <h3 className="font-medium">
                        Hibiscus Amla Summer Hair Oil
                      </h3>
                      <p className="text-sm text-gray-600">100ml • Qty 1</p>
                      <div className="flex items-center mt-1">
                        <span className="font-medium mr-2">₹334</span>
                        <span className="text-sm text-gray-500 line-through mr-2">
                          ₹468
                        </span>
                        <span className="text-sm text-green-600">29% off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700">
                      Yay! You have saved ₹134 on this order
                    </span>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span>₹468</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Total Discount</span>
                      <span>- ₹134</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping Charges</span>
                      <span>₹50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>COD Charges</span>
                      <span>₹20</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Subtotal</span>
                      <span>₹404</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-3">CONTINUE SHOPPING</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
