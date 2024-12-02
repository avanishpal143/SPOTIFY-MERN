import React from 'react';
import { PlayIcon, PauseIcon, BackwardIcon, ForwardIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const Player = () => {
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      {/* Left */}
      <div className="flex items-center space-x-4">
        <img
          className="hidden md:inline h-10 w-10"
          src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
          alt="Song Cover"
        />
        <div>
          <h3>Song Title</h3>
          <p className="text-gray-500">Artist Name</p>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center justify-center space-x-4">
        <BackwardIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        <PlayIcon className="h-10 w-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
        <ForwardIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
        <SpeakerWaveIcon className="h-5 w-5" />
        <input
          className="w-14 md:w-28"
          type="range"
          value="50"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default Player;