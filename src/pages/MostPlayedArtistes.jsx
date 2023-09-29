import React from 'react'
import { Link } from 'react-router-dom';

const MostPlayedArtistes = () => {
  return (
    <section className="p-3 ">
      <div className="text-white">
        <h3 className="text-center font-bold text-2xl mb-3">
          Your Most Played Artistes
        </h3>

        <p className="bg-[#212529] p-3">
          <Link to="/mostplayedartistes/onemonth">Last one month</Link>
        </p>
        <p className="bg-[#212529] p-3 mt-2">
          <Link to="/mostplayedartistes/oneyear">Last one year</Link>
        </p>
        <p className="bg-[#212529] p-3 mt-2">
          <Link to="/mostplayedartistes/alltime">All Time</Link>
        </p>
      </div>
    </section>
  );
}

export default MostPlayedArtistes