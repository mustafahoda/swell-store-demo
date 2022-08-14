import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Layout, Menu } from "antd";

// Import Custom Components
import Products from "./components/Products";
import About from "./components/About";
import "./App.css";

const { Header, Content, Footer } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <Header>
        <div className="logo" />
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
        Mustafa Hoda + Swell © 2022 Created w/
        <a href="https://ant.design/">Ant Design 🐜</a> + React
      </Footer>
    </Layout>
  </BrowserRouter>
);

export default App;
