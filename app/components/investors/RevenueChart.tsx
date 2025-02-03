'use client';

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const RevenueChart = ({ data }: { data: { year: string; revenue: number }[] }) => (
  <ResponsiveContainer width="100%" height="100%">
    <RechartsLineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip
        formatter={(value) => [`$${value}M`, 'Revenue']}
        labelFormatter={(label) => `Year ${label}`}
      />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="hsl(var(--primary))"
        strokeWidth={2}
        dot={{ fill: "hsl(var(--primary))" }}
      />
    </RechartsLineChart>
  </ResponsiveContainer>
);