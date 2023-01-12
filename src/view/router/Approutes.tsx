import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Check from "../pages/Check";
import Content from "../pages/Content";
import Report from "../pages/Report";

export default function Approutes() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="Check" element={<Check />} />
        <Route path="Report" element={<Report />} />
      </Routes>
    </>
  );
}
