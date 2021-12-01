import ReactEcharts from "echarts-for-react";

const lineOption = {
  legend: { data: ["新增确诊数", "新增治愈数", "新增死亡人数"] },
  xAxis: {
    type: "category", // 还有其他的type，可以去官网喵两眼哦
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // x轴数据
    name: "日期", // x轴名称
    // x轴名称样式
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  yAxis: {
    type: "value",
    name: "人数", // y轴名称
    // y轴名称样式
    nameTextStyle: {
      fontWeight: 600,
      fontSize: 18,
    },
  },
  label: {},
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

const option = {
  tooltip: {
    // 提示
    trigger: "item", // 触发方式
    formatter: "{a} <br/>{b}: {c} ({d}%)", // 提示的格式
  },
  legend: {
    // 图例
    orient: "vertical",
    x: "left",
    data: ["美国", "印度", "日本", "中国", "其他"],
  },
  series: [
    {
      name: "确诊人数",
      type: "pie", // 图标的类型
      radius: ["50%", "70%"], // 饼图的范围
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center",
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold",
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        { value: 335, name: "美国" },
        { value: 310, name: "印度" },
        { value: 234, name: "日本" },
        { value: 135, name: "中国" },
        { value: 1548, name: "其他" },
      ],
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
        { value: 1548, name: "其他" },
      ],
    },
    {
      name: "死亡人数",
      type: "pie",
      center: ["62.5%", "50%"],
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
      name: "现存确诊人数",
      type: "pie",
      center: ["87.5%", "50%"],
      radius: [40, 50],
      data: [
        { value: 335, name: "美国" },
        { value: 310, name: "印度" },
        { value: 234, name: "日本" },
        { value: 135, name: "中国" },
        { value: 1548, name: "其他" },
      ],
    },
  ],
};

const columnOption = () => {};

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

export const sumColumnChart = () => {
  return (
    <div className="line-chart">
      <ReactEcharts option={columnOption} />
    </div>
  );
};
