import { Breadcrumb, Layout, Menu, Button } from "antd";
import Products from "./components/Products";

import React from "react";

import { BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";

import "./App.css";
const swell = require("swell-js");
const { Header, Content, Footer } = Layout;

swell.init("mustafa-swell-demo", "pk_KyTi02he8noWb4FeGquWbGzvf4XwSszs");

const menuItems = [
  {
    label: "Products",
    key: "product",
  },
  {
    label: "Cart",
    key: "cart",
  },
];

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuItems}
        /> */}
        <Menu theme="dark" mode="horizontal">
          <Link to="/products">
            <Menu.Item>Products</Menu.Item>
          </Link>
          <Link to="cart">
            <Menu.Item>Cart</Menu.Item>
          </Link>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Routes>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Mustafa Hoda + Swell © 2022 Created w/ Ant + React
      </Footer>
    </Layout>
  </BrowserRouter>
);

export default App;
