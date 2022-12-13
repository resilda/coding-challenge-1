import React from 'react';
import { Link } from 'react-router-dom';
import { NavElement } from './navigation-header-elements';

export interface NavigationBarProps {
  pageTitle: string;
  navElements: Array<NavElement>;
}

export default function NavigationBar({ pageTitle, navElements }: NavigationBarProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/imgur-2752154-2284971.png"
          alt="logo"
          className="w-10 h-10"
        />
        <div className="text-xl font-bold text-primary-1 hover:cursor-pointer hover:text-primary-2">{pageTitle}</div>
      </div>
      <div className="flex gap-3">
        {navElements.map((navElement) => {
          return (
            <Link
              to={navElement.slug}
              key={navElement.id}
              className="font-medium text-md hover:cursor-pointer hover:text-primary-2"
            >
              {navElement.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
