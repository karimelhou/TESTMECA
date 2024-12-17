type StatusType = 'active' | 'inactive' | 'maintenance' | 'running' | 'stopped' | 'fault';

export const getStatusColor = (status: StatusType) => {
  const colors = {
    active: 'bg-green-100 text-green-800',
    running: 'bg-green-100 text-green-800',
    inactive: 'bg-red-100 text-red-800',
    stopped: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
    fault: 'bg-orange-100 text-orange-800',
  };
  
  return colors[status] || 'bg-gray-100 text-gray-800';
};