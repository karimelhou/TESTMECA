import React from 'react';
import { getStatusColor } from '../../utils/status-helpers';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status as any)}`}>
    {status}
  </span>
);