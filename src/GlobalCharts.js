import ReactEcharts from "echarts-for-react";
import { Table } from "antd";

const columns = [
  {
    title: "国家",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "累计确诊数",
    dataIndex: "confirm",
    key: "confirm",
  },
  {
    title: "累计死亡数",
    dataIndex: "dead",
    key: "dead",
  },
  {
    title: "累计治愈数",
    dataIndex: "heal",
    key: "heal",
  },
];



export const AddLineChart = (lineOption) => {
  return (
    <div className="line-chart">
      <ReactEcharts option={lineOption} />
    </div>
  );
};

export const ConfirmCakeChart = (cakeOption) => {
  return (
    <div className="line-chart">
      <ReactEcharts option={cakeOption} />
    </div>
  );
};

export const SumColumnChart = (columnOption) => {
  return (
    <div className="line-chart">
      <ReactEcharts option={columnOption} />
    </div>
  );
};

export const CountryList = (props) => {
  const { dataSource } = props
  return (
    <div className="line-chart">
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};
