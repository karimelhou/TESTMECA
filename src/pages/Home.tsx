import React from 'react';
import { Link } from 'react-router-dom';
import {
  CircleStackIcon,
  CogIcon,
  BoltIcon,
  WrenchIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'Circuit Breakers',
    icon: BoltIcon,
    path: '/circuit-breakers',
    description: 'Manage and monitor circuit breakers status and parameters',
    color: 'bg-blue-500',
  },
  {
    title: 'Command Controls',
    icon: CogIcon,
    path: '/command-controls',
    description: 'Control and configure command control systems',
    color: 'bg-green-500',
  },
  {
    title: 'Motors',
    icon: WrenchIcon,
    path: '/motors',
    description: 'Monitor motor performance and status',
    color: 'bg-purple-500',
  },
  {
    title: 'Associations',
    icon: LinkIcon,
    path: '/associations',
    description: 'Manage relationships between components',
    color: 'bg-orange-500',
  },
  {
    title: 'Parameters',
    icon: CircleStackIcon,
    path: '/parameters',
    description: 'Configure and track system parameters',
    color: 'bg-red-500',
  },
];

const Home = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mechanical Test Management</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the mechanical test management interface. Select a category to begin.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="block group hover:transform hover:scale-105 transition-all"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`${card.color} p-4`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;