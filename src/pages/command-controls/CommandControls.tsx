import React from 'react';
import { DataTable } from '../../components/data-display/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import type { CommandControl } from '../../types';

const CommandControls = () => {
  const columns = [
    { header: 'Name', accessor: 'name' as const },
    { header: 'Type', accessor: 'type' as const },
    {
      header: 'Connected To',
      accessor: 'connectedTo' as const,
      render: (value: string[]) => value.join(', '),
    },
  ];

  const data: CommandControl[] = [
    {
      id: '1',
      name: 'FK-001',
      type: 'Manual Control',
      connectedTo: ['CB-001', 'M-001'],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Command Controls</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Command Control
        </button>
      </div>
      <DataTable data={data} columns={columns} onRowClick={(item) => console.log(item)} />
    </div>
  );
};

export default CommandControls;