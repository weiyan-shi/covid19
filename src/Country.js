import { Menu, Cascader, DatePicker } from "antd";
import { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import {
  ProportionLineChart,
  AddColumnChart,
  SumColumnChart,
} from "./CountryCharts";
import moment from 'moment';
import "./App.css";

const dateFormat = 'YYYY-MM-DD';

const Country = (props) => {
  const {
    currentCountry,
    options,
    countryAddOptions,
    countrySumOptions,
    countryLineOptions,
    updateState,
    currentCountryDate
  } = props;
  const [current, setCurrent] = useState("1");
  const component = {
    1: <AddColumnChart {...countryAddOptions} />,
    2: <SumColumnChart {...countrySumOptions} />,
    3: <ProportionLineChart {...countryLineOptions} />,
  };

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
      <Cascader options={options} onChange={(e) => { updateState('currentCountry', e) }} defaultValue={currentCountry} placeholder="请选择国家/省份" allowClear={false} />
    );
  };

  return (
    <div className="Country">
      <div className="top-wrapper">
        <SelectCountry />
        <DatePicker defaultValue={moment(currentCountryDate, dateFormat)} onChange={(value, dateString) => { updateState('currentCountryDate', dateString) }} allowClear={false} />
      </div>
      <HorizontalMenu />
      {component[current]}
    </div>
  );
};

export default Country;
