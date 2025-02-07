"use client";

import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type RevenueData = {
  year: string;
  revenue: number;
};

type ChartConfig = {
  xAxis: React.ComponentProps<typeof XAxis>;
  yAxis: React.ComponentProps<typeof YAxis>;
  line: React.ComponentProps<typeof Line>;
};

export const RevenueChart = ({ data }: { data: RevenueData[] }) => {
  const formatters = useMemo(
    () => ({
      yAxis: (value: number) => `$${value}M`,
    }),
    []
  );

  const chartConfig = useMemo<ChartConfig>(
    () => ({
      xAxis: {
        dataKey: "year",
        stroke: "#000",
        style: { fontSize: "0.875rem", fontFamily: "inherit" },
      },
      yAxis: {
        stroke: "#000",
        style: { fontSize: "0.875rem", fontFamily: "inherit" },
        tickFormatter: formatters.yAxis,
      },
      line: {
        type: "monotone",
        dataKey: "revenue",
        stroke: "hsl(var(--primary))",
        strokeWidth: 3,
        dot: {
          fill: "hsl(var(--primary))",
          stroke: "hsl(var(--primary))",
          r: 6,
          strokeWidth: 2,
        },
        activeDot: {
          r: 8,
          stroke: "hsl(var(--primary))",
          strokeWidth: 2,
        },
      },
    }),
    [formatters.yAxis]
  );

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

  if (!data?.length)
    return <div className="p-4 text-gray-500">No revenue data available</div>;

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.1}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
          <XAxis {...chartConfig.xAxis} />
          <YAxis {...chartConfig.yAxis} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{
              fill: "hsl(var(--primary))",
              stroke: "hsl(var(--primary))",
              r: 6,
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              stroke: "hsl(var(--primary))",
              strokeWidth: 2,
            }}
            fill="url(#colorRevenue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
