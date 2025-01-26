import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import EntryNavigation from "./EntryNavigation";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";

export default function AppNavigation() {
  const auth = useAuth();
  const user = useUser();

  return (
    <Routes>
      {/* If user is logged in and initialized, navigate to MainNavigation */}
      {auth.loggedIn && user.initialized ? (
        <Route path="/*" element={<MainNavigation />} />
      ) : (
        // Otherwise, show EntryNavigation
        <Route path="/*" element={<EntryNavigation />} />
      )}
      {/* Redirect all other paths to the correct entry point */}
      <Route path="*" element={<Navigate to={auth.loggedIn ? "/" : "/login"} />} />
    </Routes>
  );
}