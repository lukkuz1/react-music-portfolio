import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/Authentication/Register";
import ForgotPassword from "../pages/Authentication/ForgotPassword";

export default function EntryNavigation() {
  return (
    <Routes>
      {/* Define the routes for the Entry section */}
      {/* For example: */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />

      {/* Redirect all other undefined paths back to the login page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
