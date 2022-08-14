import { Breadcrumb, Layout, Menu, Button } from "antd";
import Products from "./components/Products";
import About from "./components/About";

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
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Mustafa Hoda + Swell © 2022 Created w/{" "}
        <a href="https://ant.design/">Ant Design 🐜</a> + React
      </Footer>
    </Layout>
  </BrowserRouter>
);

export default App;
