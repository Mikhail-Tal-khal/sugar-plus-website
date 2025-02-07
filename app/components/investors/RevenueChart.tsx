'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useMemo } from 'react';

export const RevenueChart = ({ data }: { data: { year: string; revenue: number }[] }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Memoize formatting functions to prevent unnecessary re-renders
  const formatters = useMemo(() => ({
    yAxis: (value: number) => `$${value}M`,
    tooltipValue: (value: number) => [`$${value}M`, 'Revenue'],
    tooltipLabel: (label: string) => `Year ${label}`
  }), []);

  // Memoize chart configurations
  const chartConfig = useMemo(() => ({
    xAxis: {
      stroke: '#000',
      style: {
        fontSize: '0.875rem',
        fontFamily: 'inherit'
      }
    },
    yAxis: {
      stroke: '#000',
      style: {
        fontSize: '0.875rem',
        fontFamily: 'inherit'
      }
    },
    line: {
      stroke: "hsl(var(--primary))",
      strokeWidth: 3,
      dot: {
        fill: "hsl(var(--primary))",
        stroke: "hsl(var(--primary))",
        r: 6,
        strokeWidth: 2
      },
      activeDot: {
        r: 8,
        stroke: "hsl(var(--primary))",
        strokeWidth: 2
      }
    }
  }), []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
        <p className="font-medium text-gray-900">Year {label}</p>
        <p className="text-primary font-semibold">
          Revenue: ${payload[0].value}M
        </p>
      </div>
    );
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#eee" 
            vertical={false}
          />
          <XAxis 
            dataKey="year"
            {...chartConfig.xAxis}
          />
          <YAxis
            tickFormatter={formatters.yAxis}
            {...chartConfig.yAxis}
          />
          <Tooltip content={CustomTooltip} />
          <Line
            type="monotone"
            dataKey="revenue"
            {...chartConfig.line}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};