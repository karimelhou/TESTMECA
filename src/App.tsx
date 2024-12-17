import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const CircuitBreakers = React.lazy(() => import('./pages/circuit-breakers/CircuitBreakers'));
const CommandControls = React.lazy(() => import('./pages/command-controls/CommandControls'));
const Motors = React.lazy(() => import('./pages/motors/Motors'));
const Associations = React.lazy(() => import('./pages/associations/Associations'));
const Parameters = React.lazy(() => import('./pages/parameters/Parameters'));

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/circuit-breakers" element={<CircuitBreakers />} />
            <Route path="/command-controls" element={<CommandControls />} />
            <Route path="/motors" element={<Motors />} />
            <Route path="/associations" element={<Associations />} />
            <Route path="/parameters" element={<Parameters />} />
          </Routes>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
};