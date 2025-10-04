import React from "react";

const movies = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaR09OStNdUJcYSPLi6jk20yVz7r8k2S6P093UjSaACL-DWk2NL_Ctg--Q2H4RTckyYqk&usqp=CAU",
  "https://i.pinimg.com/736x/0d/43/1b/0d431be778f56529b8e51178cc5d1c7c.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnOmU1E3ofJhgmLpe3lQISfgmunDj9pvVAQ&s",
  "https://i.pinimg.com/1200x/d1/7c/eb/d17ceb4dd25c18b4e320af36e7131e25.jpg"
];

export const BrandNew = () => {
  return (
    <div className="Movies-part">
      <div className="heading">
        <h2 className="font-medium text-[2rem] pt-[4rem] pl-[3rem]">
          Brand New Movies
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
