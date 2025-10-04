import React from "react";
import { Carousel } from "../Components/UI/Carasoul";
import { MovieCards } from "../Components/UI/BlockBuster";
import { BrandNew } from "./UI/BrandNew";
import { MovieCardsss } from "../FetchingData/MovieData";

export const Home = () => {
  return (
    <>
      <div className="main">
        <Carousel />
      </div>
      <div className="movie-cards mt-[4rem]">
        <MovieCardsss/>
      </div>
      <MovieCards />
      <BrandNew />
    </>
  );
};
