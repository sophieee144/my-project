import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 0,
    pv: 1000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 2890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 2800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 5000,
    pv: 3000,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
      <div className='bg-white pt-3 mx-2 rounded-md shadow'>
        <div className="text-md font-medium text-slate-800 pl-4 pb-2">
            Chart Area
        </div>
        <hr className='pb-4 border-indigo-100'/>
        <AreaChart
          className='text-gray-800 font-mono'
          width={1050}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#2563eb" fill="#2563eb" fillOpacity={0.9} />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#c2410c" fill="#ea580c" fillOpacity={0.9} activeDot={{ r: 8 }}/>
        </AreaChart>
        </div>
      </ResponsiveContainer>
    );
  }
}