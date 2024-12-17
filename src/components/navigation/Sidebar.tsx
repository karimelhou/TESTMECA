import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CircleStackIcon,
  CogIcon,
  BoltIcon,
  WrenchIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Circuit Breakers', path: '/circuit-breakers', icon: BoltIcon },
  { name: 'Command Controls', path: '/command-controls', icon: CogIcon },
  { name: 'Motors', path: '/motors', icon: WrenchIcon },
  { name: 'Associations', path: '/associations', icon: LinkIcon },
  { name: 'Parameters', path: '/parameters', icon: CircleStackIcon },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-8">Test Management</h1>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-3 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}