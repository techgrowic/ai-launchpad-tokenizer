
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
}

export default function StatCard({ title, value, change }: StatCardProps) {
  return (
    <div className="stat-card animate-fadeIn">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        {change && (
          <span className={`text-sm ${change.positive ? 'text-success' : 'text-danger'}`}>
            {change.value}
          </span>
        )}
      </div>
    </div>
  );
}
