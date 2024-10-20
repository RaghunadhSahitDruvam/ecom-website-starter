import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center items-center py-[50px] bg-gray-100">
      {children}
    </main>
  );
};
export default Layout;
