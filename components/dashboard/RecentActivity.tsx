import { clsx } from 'clsx';

const activities = [
  { user: 'Ali Hassan', action: 'Created a new post', time: '2m ago', avatar: 'AH', color: 'bg-blue-100 text-blue-700' },
  { user: 'Sara Khan', action: 'Signed up', time: '14m ago', avatar: 'SK', color: 'bg-green-100 text-green-700' },
  { user: 'Umar Farooq', action: 'Updated profile', time: '1h ago', avatar: 'UF', color: 'bg-purple-100 text-purple-700' },
  { user: 'Mehwish Ali', action: 'Published a post', time: '3h ago', avatar: 'MA', color: 'bg-orange-100 text-orange-700' },
  { user: 'Bilal Ahmed', action: 'Deleted a draft', time: '5h ago', avatar: 'BA', color: 'bg-red-100 text-red-700' },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm h-full">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={clsx('w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0', item.color)}>
              {item.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{item.user}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.action}</p>
            </div>
            <span className="text-xs text-gray-400 shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
