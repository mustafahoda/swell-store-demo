import React from "react";
import { Typography, Spin } from "antd";
const { Title } = Typography;

interface AboutProps {}

interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    // this.state = { :  };
  }
  render() {
    return (
      <div>
        <Title>Welcome to Mustafa's Swell Demo Store</Title>
        <Title level={2}>Click the Product Tab above</Title>
        <Spin size="large"></Spin>
      </div>
    );
  }
}

export default About;
