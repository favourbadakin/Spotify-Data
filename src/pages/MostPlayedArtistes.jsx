import React from 'react'

const MostPlayedArtistes = () => {
  return (
    <section className="p-3 ">
      <div className="text-white">
        <h3 className="text-center font-bold text-2xl mb-3">
          Your Most Played Artistes
        </h3>

        <p className="bg-[#212529] p-3">Last one month</p>
        <p className="bg-[#212529] p-3 mt-2">Last one year</p>
        <p className="bg-[#212529] p-3 mt-2">All Time</p>
      </div>
    </section>
  );
}

export default MostPlayedArtistes