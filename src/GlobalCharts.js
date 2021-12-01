import ReactEcharts from "echarts-for-react";
import { Table } from "antd";

const lineOption = {
  legend: { data: ["新增确诊数", "新增治愈数", "新增死亡人数"] },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    name: "日期",
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  yAxis: {
    type: "value",
    name: "人数",
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  tooltip: {},
  series: [
    {
      name: "新增确诊数",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
    },
    {
      name: "新增治愈数",
      data: [620, 711, 823, 934, 1445, 1456, 1178],
      type: "line",
    },
    {
      name: "新增死亡人数",
      data: [612, 920, 1140, 1160, 1190, 1234, 1321],
      type: "line",
    },
  ],
};

const cakeOption = {
  tooltip: {
    show: true,
    trigger: "item", // 触发方式
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    x: "center",
    data: ["美国", "印度", "日本", "中国", "其他"],
  },
  calculable: false,
  series: [
    {
      name: "确诊人数",
      type: "pie",
      center: ["12.5%", "50%"],
      radius: [40, 50],
      data: [
        { value: 335, name: "美国" },
        { value: 310, name: "印度" },
        { value: 234, name: "日本" },
        { value: 135, name: "中国" },
        { value: 1548, name: "其他" },
      ],
    },
    {
      name: "治愈人数",
      type: "pie",
      center: ["37.5%", "50%"],
      radius: [40, 50],
      data: [
        { value: 335, name: "美国" },
        { value: 310, name: "印度" },
        { value: 234, name: "日本" },
        { value: 135, name: "中国" },
        { value: 20048, name: "其他" },
      ],
    },
    {
      name: "死亡人数",
      type: "pie",
      center: ["62.5%", "50%"],
      radius: [40, 50],
      data: [
        { value: 35, name: "美国" },
        { value: 310, name: "印度" },
        { value: 2304, name: "日本" },
        { value: 135, name: "中国" },
        { value: 1548, name: "其他" },
      ],
    },
    {
      name: "现存确诊人数",
      type: "pie",
      center: ["87.5%", "50%"],
      radius: [40, 50],
      data: [
        { value: 205, name: "美国" },
        { value: 10, name: "印度" },
        { value: 234, name: "日本" },
        { value: 1335, name: "中国" },
        { value: 1548, name: "其他" },
      ],
    },
  ],
};

const columnOption = {
  legend: { data: ["累计确诊数", "累计治愈数", "累计死亡人数"] },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    name: "日期",
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  yAxis: {
    type: "value",
    name: "人数",
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  tooltip: {},
  series: [
    {
      name: "累计确诊数",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "bar",
      itemStyle: {
        barBorderRadius: 3,
      },
    },
    {
      name: "累计治愈数",
      data: [100, 200, 300, 400, 500, 600, 700],
      type: "bar",
      itemStyle: {
        barBorderRadius: 3,
      },
    },
    {
      name: "累计死亡人数",
      data: [20, 93, 101, 234, 490, 530, 620],
      type: "bar",
      itemStyle: {
        barBorderRadius: 3,
      },
    },
  ],
};

const dataSource = [
  {
    key: "1",
    name: "美国",
    confirm: "1000000",
    dead: "3000",
    heal: "7000",
  },
  {
    key: "2",
    name: "印度",
    confirm: "2000",
    dead: "300",
    heal: "700",
  },
  {
    key: "3",
    name: "日本",
    confirm: "1000",
    dead: "300",
    heal: "70",
  },
  {
    key: "4",
    name: "中国",
    confirm: "30",
    dead: "10",
    heal: "20",
  },
  {
    key: "5",
    name: "韩国",
    confirm: "10",
    dead: "3",
    heal: "7",
  },
];

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

export const AddLineChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={lineOption} />
    </div>
  );
};

export const ConfirmCakeChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={cakeOption} />
    </div>
  );
};

export const SumColumnChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={columnOption} />
    </div>
  );
};

export const CountryList = () => {
  return (
    <div className="line-chart">
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};
