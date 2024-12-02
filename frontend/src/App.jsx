import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import LikedSongs from './pages/LikedSongs';
import Playlist from './pages/Playlist';

function App() {
  return (
    <Router>
      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
            <Route path="/playlist/create" element={<Playlist />} />
          </Routes>
        </main>
        
        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </Router>
  );
}

export default App;