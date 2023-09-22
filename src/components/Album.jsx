import React from "react";


const Album = ({ details }) => {
  console.log(details);
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {details.map((alb, index) => (
        <div className="text-[#FAF9F6] border-b border-l border-r border-white" key={index}>
          <a href={alb.external_urls.spotify} target="_blank">
            <img src={alb.images[0].url} alt={alb.name} />
          </a>
          <div className="p-4 text-center font-bold">
            <h4>{alb.name}</h4>
            <p className="text-sm md:text-base">
              {alb.release_date.slice(0, 4)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Album;
