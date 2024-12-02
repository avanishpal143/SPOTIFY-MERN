import React, { useState } from 'react';

const Library = () => {
  const [activeTab, setActiveTab] = useState('playlists');
  
  const tabs = [
    { id: 'playlists', label: 'Playlists' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'artists', label: 'Artists' },
    { id: 'albums', label: 'Albums' }
  ];

  const libraryItems = [
    { id: 1, title: 'Liked Songs', type: 'playlist', count: '123 songs' },
    { id: 2, title: 'My Playlist #1', type: 'playlist', count: '45 songs' },
    { id: 3, title: 'Daily Mix 1', type: 'playlist', count: '30 songs' },
  ];

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gradient-to-b from-green-900 to-black">
      <div className="p-8">
        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {libraryItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-gray-900 hover:bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white text-xl">♪</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">
                  {item.type} • {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;