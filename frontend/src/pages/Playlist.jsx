import React, { useState } from 'react';

const Playlist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle playlist creation logic here
    console.log('Creating playlist:', { playlistName, description });
  };

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gradient-to-b from-indigo-900 to-black">
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Create Playlist</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="playlistName" className="block text-white mb-2">
              Playlist Name
            </label>
            <input
              type="text"
              id="playlistName"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none"
              placeholder="My Playlist #1"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-white mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none"
              placeholder="Give your playlist a catchy description"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-full hover:bg-green-600 transition duration-300"
          >
            Create Playlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default Playlist;