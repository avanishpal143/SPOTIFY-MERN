import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Electronic',
    'R&B', 'Country', 'Latin', 'Metal', 'Folk', 'Blues'
  ];

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gradient-to-b from-purple-900 to-black">
      <div className="p-8">
        <div className="flex items-center bg-white rounded-full overflow-hidden px-4 mb-8">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="w-full p-3 outline-none text-gray-900"
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Browse All</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg cursor-pointer hover:scale-105 transition duration-300"
            >
              <h3 className="text-white font-bold">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;