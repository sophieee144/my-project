import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <div className='bg-white pt-3 mx-4 rounded-md shadow'>
              <div className="text-md font-medium text-slate-800 pl-4 pb-2">
                  Chart Pie
              </div>
              <hr className='pb-4 border-indigo-100'/>
          <PieChart 
            width={400} 
            height={300}>
              
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#64b5f6"
              label
            />
            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
          </PieChart>
        </div>
      </ResponsiveContainer>
    );
  }
}
