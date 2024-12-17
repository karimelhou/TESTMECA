import React, { useState } from 'react';
import { DataTable } from '../../components/data-display/DataTable';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import CircuitBreakerForm from './CircuitBreakerForm';
import type { CircuitBreaker } from '../../types';
import { StatusBadge } from '../../components/ui/StatusBadge';

const CircuitBreakers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CircuitBreaker | null>(null);

  const columns = [
    { header: 'Name', accessor: 'name' as const },
    { header: 'Model', accessor: 'model' as const },
    { header: 'Rating', accessor: 'rating' as const },
    {
      header: 'Status',
      accessor: 'status' as const,
      render: (value: string) => <StatusBadge status={value} />,
    },
  ];

  const data: CircuitBreaker[] = [
    {
      id: '1',
      name: 'CB-001',
      model: 'ACB-2000',
      rating: '2000A',
      status: 'active',
    },
    {
      id: '2',
      name: 'CB-002',
      model: 'MCB-400',
      rating: '400A',
      status: 'maintenance',
    },
  ];

  const handleSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Circuit Breakers</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          Add Circuit Breaker
        </Button>
      </div>

      <DataTable
        data={data}
        columns={columns}
        onRowClick={(item) => {
          setSelectedItem(item);
          setIsModalOpen(true);
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        title={selectedItem ? 'Edit Circuit Breaker' : 'Add Circuit Breaker'}
      >
        <CircuitBreakerForm
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedItem(null);
          }}
          initialData={selectedItem}
        />
      </Modal>
    </div>
  );
};

export default CircuitBreakers;