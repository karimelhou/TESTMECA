import React from 'react';
import { Sidebar } from '../navigation/Sidebar';
import { Breadcrumbs } from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
}