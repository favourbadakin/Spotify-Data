import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AlbumSearch from './pages/AlbumSearch';
import ViewMostPlayed from './pages/ViewMostPlayed';
import MostPlayedArtistes from './pages/MostPlayedArtistes';
import ArtistesOneMonth from './pages/ArtistesOneMonth';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albums" element={<AlbumSearch />} />
          <Route path="/mostplayed" element={<ViewMostPlayed />} />
          <Route path='/mostplayedartistes' element={<MostPlayedArtistes />}></Route>
          <Route path='/mostplayedartistes/onemonth' element={< ArtistesOneMonth/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App