import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Admin.module.scss";

import Navbar from "../../components/admin/navbar/Navbar.component";
import Home from "../../components/admin/home/Home.component";
import ViewProduct from "../../components/admin/viewProduct/ViewProduct.component";
import AddProduct from "../../components/admin/addProducts/AddProduct.component";
import Orders from "../../components/admin/orders/Orders.component";
import OrderDertails from "../../components/admin/orderDetails/OrderDetails.component";
const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/all-products" element={<ViewProduct />}></Route>
          <Route path="/add-product/:id" element={<AddProduct />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/order-details/:id" element={<OrderDertails />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
