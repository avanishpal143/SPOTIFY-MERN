import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Center = () => {
  return (
    <div className="flex-grow h-screen overflow-y-scroll">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src="https://i.pravatar.cc/150?img=1"
            alt="Profile"
          />
          <h2 className="text-white">John Doe</h2>
          <ChevronDownIcon className="h-5 w-5 text-white" />
        </div>
      </header>

      <section className="flex items-end space-x-7 bg-gradient-to-b from-green-500 to-black h-80 text-white p-8">
        <img
          className="h-44 w-44 shadow-2xl"
          src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
          alt="Playlist Cover"
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">Liked Songs</h1>
        </div>
      </section>

      <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
        {/* Songs list will go here */}
      </div>
    </div>
  );
};

export default Center;