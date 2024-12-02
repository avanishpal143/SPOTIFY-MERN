import React from 'react';

const Home = () => {
  const featuredPlaylists = [
    { id: 1, title: 'Daily Mix 1', image: 'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b' },
    { id: 2, title: 'Discover Weekly', image: 'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b' },
    { id: 3, title: 'Release Radar', image: 'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b' },
  ];

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gradient-to-b from-blue-900 to-black">
      <header className="p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Good Evening</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div key={playlist.id} className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition duration-300 cursor-pointer">
              <img src={playlist.image} alt={playlist.title} className="w-full rounded-md mb-4" />
              <h3 className="text-white font-semibold">{playlist.title}</h3>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Home;