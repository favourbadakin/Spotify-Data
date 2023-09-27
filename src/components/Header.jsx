import React from "react";
import { Link } from "react-router-dom";
import { SiSpotify } from "react-icons/si";

const App = () => {
  return (
    <header className="flex p-4 bg-[#0b090a] items-center">
      <span className="bg-[#0b090a] text-[#1DB954]">
        <Link to="/">
          <SiSpotify size={36} />
        </Link>
      </span>
      <Link to="/">
        <h3 className="text-2xl lg:text-3xl text-[#FAF9F6] font-bold ml-12 tracking-wide">
          Spotify Data
        </h3>
      </Link>
    </header>
  );
};

export default App;
