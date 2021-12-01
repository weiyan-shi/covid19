import { useState } from "react";
import { PageHeader } from "antd";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import "./App.css";
import Global from "./Global";
import Country from "./Country";

const App = () => {
  const [globalVisible, setGlobalVisible] = useState(true);
  const [current, setCurrent] = useState("1");

  const LeftMenu = () => {
    return (
      <Menu style={{ width: 256 }} selectedKeys={[current]}>
        <Menu.Item
          key="1"
          icon={<MailOutlined />}
          onClick={(e) => {
            setGlobalVisible(true);
            setCurrent(e.key);
          }}
        >
          全球疫情数据
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<AppstoreOutlined />}
          onClick={(e) => {
            setGlobalVisible(false);
            setCurrent(e.key);
          }}
        >
          各国疫情数据
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className="App">
      <PageHeader
        className="site-page-header"
        title="疫情数据可视化"
        subTitle="from 大数据小分队"
      />
      <div className="main-wrapper">
        <LeftMenu />
        {globalVisible ? <Global /> : <Country />}
      </div>
    </div>
  );
};

export default App;
