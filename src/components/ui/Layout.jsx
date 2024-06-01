import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ margin: 100 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
