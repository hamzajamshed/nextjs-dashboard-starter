'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000, users: 240 },
  { month: 'Feb', revenue: 5200, users: 310 },
  { month: 'Mar', revenue: 4800, users: 290 },
  { month: 'Apr', revenue: 6800, users: 420 },
  { month: 'May', revenue: 7200, users: 480 },
  { month: 'Jun', revenue: 6500, users: 390 },
  { month: 'Jul', revenue: 8100, users: 510 },
  { month: 'Aug', revenue: 9300, users: 620 },
  { month: 'Sep', revenue: 8700, users: 570 },
  { month: 'Oct', revenue: 10200, users: 700 },
  { month: 'Nov', revenue: 11000, users: 760 },
  { month: 'Dec', revenue: 12500, users: 850 },
];

export function RevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Revenue Overview</h2>
          <p className="text-sm text-gray-500 mt-0.5">Monthly revenue for 2024</p>
        </div>
        <span className="text-sm text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full">
          +18.2% YoY
        </span>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#0ea5e9"
            strokeWidth={2}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
