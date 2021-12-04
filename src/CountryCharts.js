import ReactEcharts from "echarts-for-react";


export const ProportionLineChart = (lineOption) => {
  return (
    <div className="line-chart">
      <ReactEcharts option={lineOption} />
    </div>
  );
};

export const AddColumnChart = (AddColumnOption) => {
  return (
    <div className="line-chart">
      <ReactEcharts option={AddColumnOption} />
    </div>
  );
};

export const SumColumnChart = (SumColumnOption) => {
  return (
    <div className="line-chart">
      <ReactEcharts option={SumColumnOption} />
    </div>
  );
};
