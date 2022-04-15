import React, { useEffect, useState } from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {
    const [data, setData] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data=>setData(data))
    },[])
   
    return (
        <div className='md:grid grid-cols-2'>
         <div>
         <LineChart width={500} height={400} data={data}>
            <Line dataKey={'sell'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis dataKey={'sell'}></YAxis>
            <Tooltip></Tooltip>
          </LineChart>
          <h1 className='text-slate-900 text-center text-2xl mt-3'>LINECHART</h1>
         </div>

         <div>
         <PieChart width={500} height={400}>
            <Pie 
            dataKey={'sell'}
            data={data}
            startAngle={360}
            endAngle={0}
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill="#8884d8"
            label
            ></Pie>
            <Tooltip></Tooltip>
          </PieChart>
          <h1 className='text-slate-900 text-center text-2xl mt-3'>PIECHART</h1>
         </div>
        </div>
        
    );
};

export default Dashbord;