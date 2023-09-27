import React from 'react'
import HomeView from '../components/HomeView'
import CookieConsent from "react-cookie-consent";

const HomePage = () => {
  return (
    <>
      <HomeView />
      <CookieConsent
        location="bottom"
        buttonText="No problem broh!"
        style={{ background: "#1DB954" }}
        buttonStyle={{ color: "#FFF", fontSize: "13px" }}
        expires={150}
      >
        This website is not related to Spotify, it was built for the purpose of
        learning.{" "}
      </CookieConsent>
    </>
  );
}

export default HomePage