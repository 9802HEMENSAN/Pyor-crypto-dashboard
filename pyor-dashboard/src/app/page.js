'use client';
import { useEffect, useState } from 'react';
import MultipleSelectChip from '@/components/MultiSelect';
import DashBoard from '@/Pages/Dashboard';
const localData=()=>{
  if(window.localStorage){
    let data = localStorage.getItem('options');
    if(data){
      return JSON.parse(data);
    }
    return null;
  }
}
export default function Home() {
  const [BitCoins, setBitCoins] = useState(localData()||[])
  console.log(BitCoins);
useEffect(()=>{
  localStorage.setItem('options', JSON.stringify(BitCoins));
},[BitCoins.length])
  return (
    <main style={{ backgroundColor : "#04143d", minHeight: "100vh" , color : "white"}}>
        <MultipleSelectChip BitCoins={BitCoins} setBitCoins={setBitCoins}/>
        <DashBoard  apiEndpoints={BitCoins}/>
    </main>
  )
}
