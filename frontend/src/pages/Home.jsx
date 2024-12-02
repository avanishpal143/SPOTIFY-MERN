import React from 'react';

const Home = () => {
  const featuredPlaylists = [
    { id: 1, title: 'Top 50 Songs', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ea5566686e7c90026ba3356d' },
    { id: 2, title: 'Shades of Love', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjwUIJXelocPpXykeKnoSCgLKbi2rN4DyxA&s' },
    { id: 3, title: 'Best of Rock', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dCOymLv7UYzGreFlQv1_NequlC-lPc2c0g&s' },
  ];

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gradient-to-b from-blue-900 to-black">
      <header className="p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Hindi Songs New</h1>
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