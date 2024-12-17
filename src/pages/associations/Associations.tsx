import React from 'react';
import { DataTable } from '../../components/data-display/DataTable';

interface Association {
  id: string;
  sourceType: 'cb' | 'fk' | 'motor';
  sourceId: string;
  targetType: 'cb' | 'fk' | 'motor';
  targetId: string;
  relationship: string;
}

const Associations = () => {
  const columns = [
    {
      header: 'Source',
      accessor: 'sourceId' as const,
      render: (value: string, item: Association) => `${item.sourceType.toUpperCase()}-${value}`,
    },
    {
      header: 'Target',
      accessor: 'targetId' as const,
      render: (value: string, item: Association) => `${item.targetType.toUpperCase()}-${value}`,
    },
    { header: 'Relationship', accessor: 'relationship' as const },
  ];

  const data: Association[] = [
    {
      id: '1',
      sourceType: 'fk',
      sourceId: '001',
      targetType: 'cb',
      targetId: '001',
      relationship: 'Controls',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Associations</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Association
        </button>
      </div>
      <DataTable data={data} columns={columns} onRowClick={(item) => console.log(item)} />
    </div>
  );
};

export default Associations;