import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EChartComponent = ({ item, apiEndpoints, index }) => {
  const chartRef = useRef(null);
  let data = item?.prices?.map((entry) => ({
    name:  new Date(entry[0]).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
    value: entry[1],
  }));

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: data?.map((entry) => entry?.name),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: data?.map((entry) => entry?.value),
          type: "line",
          areaStyle: {},
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      // Clean up when the component unmounts
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <h2>Dashboard of {apiEndpoints[index]}</h2>
      <div ref={chartRef} style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default EChartComponent;
