import EChartComponent from "@/components/Charts";
import React, { useState, useEffect } from "react";
 
const DashBoard = ({ apiEndpoints = [] }) => {
  //   const apiEndpoints = ['ethereum', 'dogecoin', 'solana'];

  const [data, setData] = useState(apiEndpoints);

  async function fetchDataFromEndpoints(endpoints) {
    const dataArray = [];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${endpoint}/market_chart?vs_currency=usd&days=365&interval=daily`
        );
        const data = await response.json();
        dataArray.push(data);
      } catch (error) {
        console.error(`Error fetching data for ${endpoint}:`, error);
        dataArray.push(null);
      }
    }

    return dataArray;
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataArray = await fetchDataFromEndpoints(apiEndpoints);
      setData(dataArray);
      console.log(dataArray);
    };

    fetchData();
  }, [apiEndpoints.length]);

  return (
    <div  >
      <h1 style={{ textAlign : "center" }}>Pyor Crypto Dashboard</h1>
      <div style={{ marginTop : "50px"}}>
        {data.length > 0 ?
          data?.map((item, index) => (
            <EChartComponent
              key={Date.now() + Math.random()}
              apiEndpoints={apiEndpoints}
              index={index}
              item={item}
            />
          )) :   <div style={{ display : "flex", justifyContent : "center", alignItems : "center", marginTop : "150px"}}>
            <img  height="200px" width="200px"src="https://user-images.githubusercontent.com/111531676/260286924-6641bc36-9128-4b28-a327-23242e318d6b.gif" />
          </div> 
        }
      </div>
    </div>
  );
};

export default DashBoard;
