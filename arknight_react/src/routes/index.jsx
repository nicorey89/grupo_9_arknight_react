import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Users } from "../pages/Users";
import { Categories } from "../pages/Categories";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
