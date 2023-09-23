import React from "react";
import { useState, useEffect } from "react";
import Album from "./Album";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searchAlbum, setSearchAlbum] = useState([]);

  //COPY AND PASTE
  const [accessToken, setAccessToken] = useState("");
  //const CLIENT_ID = import.meta.env.VITE_APP_CLIENT_ID;
  //const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;

  //console.log(CLIENT_ID)
  const CLIENT_ID = "4e165049ed73401fbe15061b561d3275";
  const CLIENT_SECRET = "61b12abbeaeb4d5abcfcf40ed4bd81e3";
  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };
    // console.log(CLIENT_ID);
    fetch(`https://accounts.spotify.com/api/token`, authParameters)
      .then((res) => res.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //COPY AND PASTE

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    const artistId = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=artist`,
      searchParameters
    )
      .then((res) => res.json())

      //.then(data => console.log(data))
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("Artist id is " + artistId);
    artistId === null ? console.log("Invalid") : console.log("Valid");

    const returnedAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=us&limit=50`,
      searchParameters
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchAlbum(data.items);
      });
  };
  //console.log(searchAlbum)
  return (
    <section className="pt-3 bg-[#0b090a]">
      <form
        className="flex items-center px-4 md:px-[20%] lg:px-[30%]"
        onSubmit={handleSubmit}
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-[#C4C4C4]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-[#FFF] border-2 capitalize text-[#000] text-sm rounded-lg focus:outline-none block w-full pl-10 p-2.5"
            placeholder="Search for Artist"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white hover:bg-[#1ed760] rounded-lg bg-[#1DB954] focus:ring-4 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <Album details={searchAlbum} />
    </section>
  );
};

export default SearchBar;
