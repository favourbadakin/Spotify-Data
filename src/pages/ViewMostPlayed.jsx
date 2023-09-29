import React from 'react'
import { Link } from 'react-router-dom';


const ViewMostPlayed = () => {
  return (
    <>
      <section className="p-3 ">
        <div className="text-white">
          <h3 className="text-center font-bold text-2xl mb-3">
            Your Most Played Songs
          </h3>

          <p className="bg-[#212529] p-3">
            <Link to="/mostplayedsongs/onemonth">Last one Month</Link>
          </p>
          <p className="bg-[#212529] p-3 mt-2">
            <Link to="/mostplayedsongs/oneyear">Last one Year</Link>
          </p>
          <p className="bg-[#212529] p-3 mt-2">
            <Link to="/mostplayedsongs/alltime">All Time</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default ViewMostPlayed