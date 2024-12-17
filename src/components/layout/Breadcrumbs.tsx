import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
      <Link to="/" className="hover:text-blue-600">
        <HomeIcon className="w-4 h-4" />
      </Link>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <ChevronRightIcon className="w-4 h-4" />
          <Link
            to={`/${paths.slice(0, index + 1).join('/')}`}
            className="hover:text-blue-600 capitalize"
          >
            {path.replace(/-/g, ' ')}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}