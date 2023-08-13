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
    <div >
        <h1 style={{ textAlign : "center" , position : 'sticky' , top : "100px", zIndex: 120 , backgroundColor : "#04143d", padding : "10px" }}>Pyor Crypto Dashboard</h1>
    
      <div>
        {data.length > 0 ?
          data?.map((item, index) => (
            <EChartComponent
              key={Date.now() + Math.random()}
              apiEndpoints={apiEndpoints}
              index={index}
              item={item}
            />
          )) :   
          <div style={{ display : "flex", justifyContent : "center", alignItems : "center" }}>
            <img  height = "700px" width="100%" src="https://i.pinimg.com/originals/9b/70/57/9b7057e2316b9f623e24485d604c644e.gif" />
          </div> 
        }
      </div>
    </div>
  );
};

export default DashBoard;
