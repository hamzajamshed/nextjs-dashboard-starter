import { Users, FileText, TrendingUp, DollarSign } from 'lucide-react';
import { clsx } from 'clsx';

const stats = [
  {
    label: 'Total Users',
    value: '4,231',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    label: 'Posts Published',
    value: '892',
    change: '+8.2%',
    trend: 'up',
    icon: FileText,
    color: 'text-purple-600 bg-purple-50',
  },
  {
    label: 'Monthly Revenue',
    value: '$18,540',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600 bg-green-50',
  },
  {
    label: 'Conversion Rate',
    value: '3.24%',
    change: '-0.4%',
    trend: 'down',
    icon: TrendingUp,
    color: 'text-orange-600 bg-orange-50',
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            <span className={clsx('w-9 h-9 rounded-lg flex items-center justify-center', stat.color)}>
              <stat.icon className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            <span
              className={clsx(
                'text-xs font-medium px-2 py-1 rounded-full',
                stat.trend === 'up'
                  ? 'text-green-700 bg-green-50'
                  : 'text-red-700 bg-red-50',
              )}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
