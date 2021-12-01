import { Menu } from "antd";
import { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./App.css";

const Global = () => {
  const myDate = new Date();
  const [current, setCurrent] = useState("1");

  const DataCards = () => {
    return (
      <div className="site-card-wrapper">
        <Card title="时间" bordered={false}>
          {myDate.toLocaleDateString()}
        </Card>
        <Card title="累计确诊" bordered={false}>
          3000
        </Card>
        <Card title="累计治愈" bordered={false}>
          2000
        </Card>
        <Card title="累计死亡" bordered={false}>
          1000
        </Card>
      </div>
    );
  };

  const HorizontalMenu = () => {
    return (
      <div className="global-menu">
        <Menu selectedKeys={[current]} mode="horizontal">
          <Menu.Item
            key="1"
            icon={<MailOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="global-menu-item"
          >
            新增趋势图
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<AppstoreOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="global-menu-item"
          >
            累积趋势图
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<MailOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="global-menu-item"
          >
            饼图
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<AppstoreOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="global-menu-item"
          >
            列表展示
          </Menu.Item>
        </Menu>
      </div>
    );
  };

  return (
    <div className="Global">
      <DataCards />
      <HorizontalMenu />
    </div>
  );
};

export default Global;
