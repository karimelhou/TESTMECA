import React from 'react';
import { DataTable } from '../../components/data-display/DataTable';
import type { Parameter } from '../../types';

const Parameters = () => {
  const columns = [
    { header: 'Name', accessor: 'name' as const },
    {
      header: 'Value',
      accessor: 'value' as const,
      render: (value: string | number, item: Parameter) => `${value} ${item.unit}`,
    },
    { header: 'Component Type', accessor: 'componentType' as const },
    { header: 'Component ID', accessor: 'componentId' as const },
  ];

  const data: Parameter[] = [
    {
      id: '1',
      name: 'Operating Temperature',
      value: 45,
      unit: '°C',
      componentId: 'CB-001',
      componentType: 'cb',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Parameters</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Parameter
        </button>
      </div>
      <DataTable data={data} columns={columns} onRowClick={(item) => console.log(item)} />
    </div>
  );
};

export default Parameters;