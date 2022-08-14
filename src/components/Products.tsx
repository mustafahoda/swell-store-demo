import * as React from "react";
import { Space, Table, Button, Statistic } from "antd";
import Column from "antd/lib/table/Column";
const swell = require("swell-js");

swell.init(
  process.env.REACT_APP_SWELL_STORE_ID,
  process.env.REACT_APP_SWELL_PUBLIC_KEY
);

interface ProductsProps {}

interface ProductsState {
  products: any;
  cartValue: number;
  // TODO: Fix the typing
  cart: {
    [key: string]: {
      quantity: number;
    };
  };
}

class Products extends React.Component<ProductsProps, ProductsState> {
  // Get Producs from Swell Backend
  async getProducts() {
    try {
      let products = await swell.products.list({
        limit: 25, // Max. 100
        page: 1,
      });

      return products;
    } catch (error) {
      throw error;
    }
  }

  addToCart(props: { id: string }) {
    let itemToAdd: string = props.id;

    // If the item already exists, update the quantity
    if (this.state.cart.hasOwnProperty(itemToAdd)) {
      console.log("The item already is in the cart. Updating quantity");
      this.state.cart[itemToAdd]["quantity"]++;
    }
    // If the item isn't in the cart, then add it to the cart
    else {
      console.log("The item isn't in the cart. Adding to cart");
      this.state.cart[itemToAdd] = { quantity: 1 };
    }

    // Update the cart value
    // Find the value of the item that is being added
    let foundProduct = this.state.products.results.find(
      (x: any) => x.id === itemToAdd
    );

    this.setState({
      cartValue: this.state.cartValue + foundProduct.price,
    });

    // this.state.cartValue = this.state.cartValue + foundProduct.price;

    console.log(this.state);
  }

  getCartValue() {}

  COLUMNS = [
    {
      title: "Name",
      dataIndex: "name",
      name: "name",
    },
    {
      title: "Photo",
      dataIndex: "photo",
      name: "photo",
    },
    {
      title: "Description",
      dataIndex: "description",
      name: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      name: "price",
    },
    {
      title: "Add to Cart",
      dataIndex: "addToCart",
      name: "addToCart",
    },
  ];

  constructor(props: ProductsProps) {
    super(props);
    this.state = {
      cartValue: 0,
      products: {},
      cart: {},
    };
  }

  async componentDidMount() {
    this.setState({
      cartValue: 0,
      products: await this.getProducts(),
      cart: {},
    });

    console.log(this.state.cart);
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        {/* <Table
          dataSource={this.state.products.results}
          columns={this.COLUMNS}
        ></Table> */}
        <Statistic
          title="Total Cart Value"
          value={this.state.cartValue}
          precision={2}
        ></Statistic>
        <Table dataSource={this.state.products.results}>
          <Column title="Name" dataIndex="name" key="name"></Column>
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          ></Column>
          <Column
            title="Photo"
            dataIndex={["images", 0, "file", "url"]}
            key="photo"
            render={(_: any, record: any) => {
              return <img src={_} width="100"></img>;
            }}
          ></Column>
          <Column
            title="Price"
            dataIndex="price"
            key="price"
            defaultSortOrder="descend"
            sorter={(a: any, b: any) => a.price - b.price}
          ></Column>
          <Column
            title="Action"
            key="action"
            render={(_: any, record: any) => {
              return (
                <Space size="middle">
                  <Button
                    type="primary"
                    onClick={() => this.addToCart({ id: _.id })}
                  >
                    Add to Cart
                  </Button>
                </Space>
              );
            }}
          ></Column>
        </Table>
      </div>
    );
  }
}

export default Products;
