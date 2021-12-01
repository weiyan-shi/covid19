import { Select, Menu } from "antd";
import { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { AddLineChart, ConfirmCakeChart, SumColumnChart } from "./GlobalCharts";
import "./App.css";
import { COMPARISON_BINARY_OPERATORS } from "@babel/types";

const { Option } = Select;

const Country = () => {
  const [current, setCurrent] = useState("1");
  const [countryCurrent, setCountryCurrent] = useState("China");

  console.log(countryCurrent);
  const component = {
    1: <AddLineChart />,
    2: <SumColumnChart />,
    3: <ConfirmCakeChart />,
  };
  const options = [
    {
      value: "America",
      name: "美国",
    },
    {
      value: "Japan",
      name: "日本",
    },
    {
      value: "India",
      name: "印度",
    },
    {
      value: "China",
      name: "中国",
    },
    {
      value: "Korea",
      name: "韩国",
    },
  ];

  const HorizontalMenu = () => {
    return (
      <div className="Country-menu">
        <Menu selectedKeys={[current]} mode="horizontal">
          <Menu.Item
            key="1"
            icon={<MailOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="country-menu-item"
          >
            每日增量数据统计图
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<AppstoreOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="country-menu-item"
          >
            累计数据统计图
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<MailOutlined />}
            onClick={(e) => {
              setCurrent(e.key);
            }}
            className="country-menu-item"
          >
            各国比率数据
          </Menu.Item>
        </Menu>
      </div>
    );
  };

  const SelectCountry = () => {
    return (
      <Select
        showSearch
        placeholder="请选择您要查询的国家"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
        className="select-box"
        defaultValue={countryCurrent}
        onSelect={(e) => {
          setCountryCurrent(e);
        }}
      >
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.name}
          </Option>
        ))}
      </Select>
    );
  };

  return (
    <div className="Country">
      <SelectCountry />
      <HorizontalMenu />
    </div>
  );
};

export default Country;
