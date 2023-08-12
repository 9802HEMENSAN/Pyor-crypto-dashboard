'use client';
import { useState } from 'react';
import MultipleSelectChip from '@/components/MultiSelect';
import DashBoard from '@/Pages/Dashboard';

export default function Home() {
  const [BitCoins, setBitCoins] = useState([])

  console.log(BitCoins);


  return (
    <main  >
        <MultipleSelectChip BitCoins={BitCoins} setBitCoins={setBitCoins}/>
       <DashBoard  apiEndpoints={BitCoins}/>
    </main>
  )
}
