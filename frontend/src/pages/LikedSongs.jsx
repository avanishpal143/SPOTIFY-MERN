import React from 'react';
import Song from '../components/Song';

const LikedSongs = () => {
  const likedSongs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      duration: "5:55",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
    },
    {
      id: 2,
      title: "Hotel California",
      artist: "Eagles",
      duration: "6:30",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
    },
    {
      id: 3,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      duration: "5:56",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
    }
  ];

  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gradient-to-b from-pink-900 to-black">
      <header className="p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Liked Songs</h1>
        <p className="text-gray-400">{likedSongs.length} songs</p>
      </header>

      <div className="px-8 space-y-1">
        {likedSongs.map((song, i) => (
          <Song
            key={song.id}
            order={i}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            albumCover={song.albumCover}
          />
        ))}
      </div>
    </div>
  );
};

export default LikedSongs;