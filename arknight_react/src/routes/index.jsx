import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { ProductsDetail } from "../pages/ProductsDetail";
import { Users } from "../pages/Users";
import { UsersDetail } from "../pages/UsersDetail";
import { Categories } from "../pages/Categories";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductsDetail />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetail />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
