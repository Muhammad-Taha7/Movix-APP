import React from "react";

const movies = [
  "https://i.pinimg.com/736x/56/c7/c1/56c7c1ec648c935d3f0384fd37622fca.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrNhHN9iYOxAbzJmbMJkCL6izX6AhfBExWg&s",
  "https://lumiere-a.akamaihd.net/v1/images/saf_tmup_27x40_pre-launch_act655256_6dc05485.jpeg?region=0,0,1707,2500",
  "https://m.media-amazon.com/images/M/MV5BMTAwMDllODMtMmIxNC00OGQ2LTg2YjgtNDRkNTRlMjc2OGM1XkEyXkFqcGc@._V1_.jpg"
];

export const MovieCards = () => {
  return (
    <div className="Movies-part">
      <div className="heading">
        <h2 className="font-medium text-[2rem] pt-[4rem] pl-[3rem]">
          BlockBuster Movies
        </h2>
      </div>
      <div className="cards-layout grid gap-5 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-[2rem]">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="card-1 h-[30rem] w-full bg-black rounded-2xl overflow-hidden"
          >
            <img
              src={movie}
              className="h-[100%] w-full object-cover object-center"
              alt={`Movie ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
