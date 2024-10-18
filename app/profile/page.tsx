"use client";

import { useState } from "react";
import { Bell, CreditCard, LogOut, Settings, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MyProfile() {
  const [user, setUser] = useState({
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "/placeholder-avatar.jpg",
    address: "123 Main St, Anytown, AN 12345",
    billingAddress: {
      street: "456 Billing St",
      city: "Billtown",
      state: "BL",
      zipCode: "67890",
      country: "United States",
    },
  });

  const [orders, setOrders] = useState([
    { id: "ORD001", date: "2023-05-15", total: 150.99, status: "Delivered" },
    { id: "ORD002", date: "2023-06-02", total: 89.99, status: "Processing" },
    { id: "ORD003", date: "2023-06-10", total: 200.5, status: "Refunded" },
  ]);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement profile update logic here
    console.log("Updating profile...");
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement password change logic here
    console.log("Changing password...");
  };

  const handleBillingAddressUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement billing address update logic here
    console.log("Updating billing address...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="font-bold text-2xl text-center">MY PROFILE</div>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="flex flex-col space-y-1">
                <Button variant="ghost" className="justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Billing
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </CardContent>
            <CardFooter>
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </CardFooter>
          </Card>
        </aside>
        <main className="flex-1">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your profile details here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue={user.name} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue={user.email}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" defaultValue={user.address} />
                      </div>
                    </div>
                    <Button type="submit" className="mt-4">
                      Update Profile
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>
                    View your past orders and their status.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between border-b pb-2"
                      >
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${order.total.toFixed(2)}
                          </p>
                          <p
                            className={`text-sm ${
                              order.status === "Refunded"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                  <CardDescription>
                    Update your billing address details here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBillingAddressUpdate}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="billing-street">Street Address</Label>
                        <Input
                          id="billing-street"
                          defaultValue={user.billingAddress.street}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="billing-city">City</Label>
                        <Input
                          id="billing-city"
                          defaultValue={user.billingAddress.city}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="billing-state">State</Label>
                        <Input
                          id="billing-state"
                          defaultValue={user.billingAddress.state}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="billing-zipcode">Zip Code</Label>
                        <Input
                          id="billing-zipcode"
                          defaultValue={user.billingAddress.zipCode}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="billing-country">Country</Label>
                        <Input
                          id="billing-country"
                          defaultValue={user.billingAddress.country}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="mt-4">
                      Update Billing Address
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account settings and change your password.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordChange}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">
                          Confirm New Password
                        </Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button type="submit" className="mt-4">
                      Change Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
