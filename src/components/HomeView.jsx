import React from 'react'
import { Link } from 'react-router-dom'

const HomeView = () => {
  return (
    <>
      <section className="p-3 ">
        <div className="text-white">
          <p className="bg-[#212529] p-3">
            <Link to="/albums"> View Albums </Link>
          </p>
          <p className="bg-[#212529] p-3 mt-2">View Your Most Played Songs</p>
          <p className="bg-[#212529] p-3 mt-2">View Your Most Played Artistes</p>
        </div>
      </section>
    </>
  );
}

export default HomeView