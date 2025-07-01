"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 4096 },
  { name: "Fev", value: 2048 },
  { name: "Mar", value: 1024 },
  { name: "Abr", value: 512 },
  { name: "Mai", value: 256 },
  { name: "Jun", value: 128 },
  { name: "Jul", value: 64 },
  { name: "Ago", value: 32 },
  { name: "Sep", value: 16 },
  { name: "Out", value: 8 },
  { name: "Nov", value: 4 },
  { name: "Dez", value: 2 },
];

export default function ChartCard() {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6 h-[400px]">
      <div className="flex justify-between mb-4">
        <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white">
          Amortização
        </h5>
      </div>

      {/* Make sure this div has height */}
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
