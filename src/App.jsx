import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AlbumSearch from './pages/AlbumSearch';
import ViewMostPlayed from './pages/ViewMostPlayed';
import MostPlayedArtistes from './pages/MostPlayedArtistes';
import ArtistesOneMonth from './pages/ArtistesOneMonth';
import ArtistesOneYear from './pages/ArtistesOneYear';
import ArtistesAllTime from './pages/ArtistesAllTime';
import SongsAllTime from './pages/SongsAllTime';
import SongsOneYear from './pages/SongsOneYear';
import SongsOneMonth from './pages/SongsOneMonth';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albums" element={<AlbumSearch />} />
          <Route path="/mostplayed" element={<ViewMostPlayed />} />
          <Route
            path="/mostplayedartistes"
            element={<MostPlayedArtistes />}
          ></Route>
          <Route
            path="/mostplayedartistes/onemonth"
            element={<ArtistesOneMonth />}
          ></Route>
          <Route
            path="/mostplayedartistes/oneyear"
            element={<ArtistesOneYear />}
          ></Route>
          <Route
            path="/mostplayedartistes/alltime"
            element={<ArtistesAllTime />}
          ></Route>
          <Route
            path="/mostplayedsongs/alltime"
            element={<SongsAllTime />}
          ></Route>
          <Route
            path="/mostplayedsongs/onemonth"
            element={<SongsOneMonth />}
          ></Route>
          <Route
            path="/mostplayedsongs/oneyear"
            element={<SongsOneYear />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App