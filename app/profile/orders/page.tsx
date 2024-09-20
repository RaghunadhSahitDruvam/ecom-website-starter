import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { XCircle } from "lucide-react";
const orders = [
  {
    id: "66ed5ec9d316594990e71a19",
    products: ["https://placehold.co/40x40"],
    paymentMethod: "COD",
    total: "₹ 2400",
    paid: false,
  },
  {
    id: "66ec30c7671caca80b89518e",
    products: ["https://placehold.co/40x40", "https://placehold.co/40x40"],
    paymentMethod: "COD",
    total: "₹ 5600",
    paid: false,
  },
  {
    id: "66dbb70be5922373191adf66",
    products: ["https://placehold.co/40x40"],
    paymentMethod: "COD",
    total: "₹ 1280",
    paid: false,
  },
  {
    id: "66cab025fa11686711ff2fc8",
    products: ["https://placehold.co/40x40"],
    paymentMethod: "RazorPay",
    total: "₹ 750",
    paid: false,
  },
];

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading text-center mb-6">MY ORDERS</h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="paid">Paid Orders</TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 text-white">
                <TableHead className="w-[250px]">Order Id</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {order.products.map((product, index) => (
                        <img
                          key={index}
                          src={product}
                          alt={`Product ${index + 1}`}
                          className="rounded-full bg-gray-200 w-[40px] h-[40px]"
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    {order.paid ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <XCircle className="text-red-500 h-5 w-5" />
                    )}
                  </TableCell>
                  <TableCell>
                    <button className="text-blue-500 hover:text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
