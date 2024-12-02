import React from 'react';

const Song = ({ order, title, artist, duration, albumCover }) => {
  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={albumCover}
          alt={title}
        />
        <div>
          <p className="w-36 lg:w-64 truncate text-white">{title}</p>
          <p className="w-40">{artist}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline">{duration}</p>
      </div>
    </div>
  );
};

export default Song;