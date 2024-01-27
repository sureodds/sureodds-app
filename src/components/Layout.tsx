"use client";
import React, { useState } from "react";
import Sidenav from "@/components/Sidenav";
import MobileSidenav from "@/components/Mobilenav";
import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <section className="flex sm:h-screen h-full w-full overflow-hidden">
      <Sidenav />
      <MobileSidenav toggle={toggle} handleToggle={handleToggle} />
      <main className="w-screen relative bg-gray-100 dark:bg-primary overflow-y-auto">
        <Header onClick={handleToggle} />
        {children}
      </main>
    </section>
  );
};

export default Layout;
