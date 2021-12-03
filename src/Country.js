import { Menu, Cascader } from "antd";
import { useEffect, useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import {
  ProportionLineChart,
  AddColumnChart,
  SumColumnChart,
} from "./CountryCharts";
import { httpPost } from './http'
import "./App.css";

const Country = () => {
  const [current, setCurrent] = useState("1");
  const [countryCurrent, setCountryCurrent] = useState(['China', 'Beijing']);
  const apiPath = 'http://192.168.0.104:3000/api';
  const [options, setOptions] = useState([]);
  const [lineOption, setLineOption] = useState({});

  useEffect(() => {
    getSelectedOptions();
    getCountryLineOptions();
  }, []);

  const getSelectedOptions = () => {
    httpPost(apiPath + '/getSelectedOptions', {}).then((response) => {
      return response.json();
    }).then((data) => {
      setOptions(data);
    }).catch(function (err) {
      console.log(err)
    })
  };

  const getCountryLineOptions = () => {
    httpPost(apiPath + '/getCountryLineOptions', countryCurrent).then((response) => {
      return response.json();
    }).then((data) => {
      setLineOption(data);
    }).catch(function (err) {
      console.log(err)
    })
  }

  const component = {
    1: <AddColumnChart />,
    2: <SumColumnChart />,
    3: <ProportionLineChart {...lineOption} />,
  };


  // const options = [
  //   {
  //     value: 'America',
  //     label: '美国',
  //     children: [
  //       {
  //         value: 'California',
  //         label: '加利福尼亚',
  //       },
  //       {
  //         value: 'Florida',
  //         label: '佛罗里达'
  //       }
  //     ],
  //   },
  //   {
  //     value: 'China',
  //     label: '中国',
  //     children: [
  //       {
  //         value: 'Beijing',
  //         label: '北京',
  //       },
  //       {
  //         value: 'Shanghai',
  //         label: '上海',
  //       },
  //     ],
  //   },
  // ];


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
      <Cascader options={options} onChange={(e) => { setCountryCurrent(e) }} defaultValue={countryCurrent} placeholder="请选择国家/省份" allowClear={false} />
    );
  };

  return (
    <div className="Country">
      <SelectCountry />
      <HorizontalMenu />
      {component[current]}
    </div>
  );
};

export default Country;
