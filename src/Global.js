import { Menu } from "antd";
import { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { DatePicker } from 'antd';
import moment from 'moment';
import {
  AddLineChart,
  ConfirmCakeChart,
  SumColumnChart,
  CountryList,
} from "./GlobalCharts";
import "./App.css";

const dateFormat = 'YYYY-MM-DD';

const Global = (props) => {
  const {
    globalBasicInfo,
    globalAddOptions,
    globalCakeOptions,
    globalSumOptions,
    globalCountriesList,
    updateState,
    currentDate
  } = props;

  const [current, setCurrent] = useState("1");
  const component = {
    1: <AddLineChart {...globalAddOptions} />,
    2: <SumColumnChart {...globalSumOptions} />,
    3: <ConfirmCakeChart {...globalCakeOptions} />,
    4: <CountryList dataSource={globalCountriesList} />,
  };

  const DataCards = () => {
    return (
      <div className="site-card-wrapper">
        <Card title="时间" bordered={false}>
          <DatePicker defaultValue={moment(currentDate, dateFormat)} onChange={(value, dateString) => { updateState('currentDate', dateString) }} allowClear={false} />
        </Card>
        <Card title="累计确诊" bordered={false}>
          {globalBasicInfo && globalBasicInfo['confirm']}
        </Card>
        <Card title="累计治愈" bordered={false}>
          {globalBasicInfo && globalBasicInfo['heal']}
        </Card>
        <Card title="累计死亡" bordered={false}>
          {globalBasicInfo && globalBasicInfo['dead']}
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
      {component[current]}
    </div>
  );
};


export default Global;
