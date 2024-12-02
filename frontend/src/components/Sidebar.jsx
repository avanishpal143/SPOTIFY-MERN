import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navigationItems = [
    { icon: HomeIcon, text: 'Home', path: '/' },
    { icon: MagnifyingGlassIcon, text: 'Search', path: '/search' },
    { icon: BuildingLibraryIcon, text: 'Your Library', path: '/library' },
  ];

  const playlistItems = [
    { icon: PlusCircleIcon, text: 'Create Playlist', path: '/playlist/create' },
    { icon: HeartIcon, text: 'Liked Songs', path: '/liked-songs' },
  ];

  return (
    <div className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
      <div className="space-y-4">
        {navigationItems.map((item) => (
          <button
            key={item.path}
            className={`flex items-center space-x-2 hover:text-white w-full ${
              isActive(item.path) ? 'text-white' : ''
            }`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="h-5 w-5" />
            <p>{item.text}</p>
          </button>
        ))}
        
        <hr className="border-t-[0.1px] border-gray-900" />

        {playlistItems.map((item) => (
          <button
            key={item.path}
            className={`flex items-center space-x-2 hover:text-white w-full ${
              isActive(item.path) ? 'text-white' : ''
            }`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="h-5 w-5" />
            <p>{item.text}</p>
          </button>
        ))}
        
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">My Playlist #1</p>
        <p className="cursor-pointer hover:text-white">Chill Vibes</p>
        <p className="cursor-pointer hover:text-white">Workout Mix</p>
        <p className="cursor-pointer hover:text-white">Road Trip</p>
        <p className="cursor-pointer hover:text-white">Party Hits</p>
      </div>
    </div>
  );
};

export default Sidebar;