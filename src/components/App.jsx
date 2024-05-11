import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import Layout from "./ui/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import MeetAJ from "../pages/MeetAJ";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/meetaj" element={<MeetAJ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
