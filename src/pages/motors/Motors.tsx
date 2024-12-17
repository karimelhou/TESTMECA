import React from 'react';
import { DataTable } from '../../components/data-display/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import type { Motor } from '../../types';

const Motors = () => {
  const columns = [
    { header: 'Name', accessor: 'name' as const },
    { header: 'Power', accessor: 'power' as const },
    { header: 'RPM', accessor: 'rpm' as const },
    {
      header: 'Status',
      accessor: 'status' as const,
      render: (value: string) => <StatusBadge status={value} />,
    },
  ];

  const data: Motor[] = [
    {
      id: '1',
      name: 'M-001',
      power: '75kW',
      rpm: 1500,
      status: 'running',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Motors</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Motor
        </button>
      </div>
      <DataTable data={data} columns={columns} onRowClick={(item) => console.log(item)} />
    </div>
  );
};

export default Motors;