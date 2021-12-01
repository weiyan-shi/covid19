import ReactEcharts from "echarts-for-react";

const AddColumnOption = {
  legend: { data: ["每日新增确诊数", "每日新增治愈数", "每日新增死亡人数"] },
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
      name: "每日新增确诊数",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "bar",
      itemStyle: {
        barBorderRadius: 3,
      },
    },
    {
      name: "每日新增治愈数",
      data: [100, 200, 300, 400, 500, 600, 700],
      type: "bar",
      itemStyle: {
        barBorderRadius: 3,
      },
    },
    {
      name: "每日新增死亡人数",
      data: [20, 93, 101, 234, 490, 530, 620],
      type: "bar",
      itemStyle: {
        barBorderRadius: 3,
      },
    },
  ],
};

const SumColumnOption = {
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

const lineOption = {
  legend: { data: ["发病率", "治愈率", "死亡率"] },
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
    name: "比率",
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  tooltip: {},
  series: [
    {
      name: "发病率",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
    },
    {
      name: "治愈率",
      data: [620, 711, 823, 934, 1445, 1456, 1178],
      type: "line",
    },
    {
      name: "死亡率",
      data: [612, 920, 1140, 1160, 1190, 1234, 1321],
      type: "line",
    },
  ],
};

export const ProportionLineChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={lineOption} />
    </div>
  );
};

export const AddColumnChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={AddColumnOption} />
    </div>
  );
};

export const SumColumnChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={SumColumnOption} />
    </div>
  );
};
