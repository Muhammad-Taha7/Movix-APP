import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: "https://spoilertown.com/wp-content/uploads/2024/06/inception-2010.webp",
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan",
      link: "/movies/inception"
    },
    {
      id: 2,
      image: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/59173d0b-5ac3-4ede-906d-80136b44fd0e/compose?aspectRatio=1.78&format=webp&width=1200",
      title: "Avengers: Endgame",
      description: "Epic superhero showdown to save the universe",
      link: "/movies/avengers-endgame"
    },
    {
      id: 3,
      image: "https://huilahimovie.reviews/wp-content/uploads/2024/05/thumb-1920-1108220.jpg",
      title: "The Godfather",
      description: "A classic mafia saga and cinematic masterpiece",
      link: "/movies/the-godfather"
    },
    {
      id: 4,
      image: "https://assets.murphysmultiverse.com/uploads/2022/02/knight.jpg",
      title: "The Dark Knight",
      description: "Batman faces the Joker in this thrilling action epic",
      link: "/movies/the-dark-knight"
    },
    {
      id: 5,
      image: "https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg",
      title: "Interstellar",
      description: "A breathtaking journey through space and time",
      link: "/movies/interstellar"
    }
  ];

  useEffect(() => {
    const swiperCSS = document.createElement("link");
    swiperCSS.rel = "stylesheet";
    swiperCSS.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    document.head.appendChild(swiperCSS);

    const swiperScript = document.createElement("script");
    swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    swiperScript.async = true;

    swiperScript.onload = () => {
      if (window.Swiper && swiperRef.current) {
        swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
          loop: true,
          autoplay: { delay: 3500, disableOnInteraction: false },
          speed: 800,
          effect: "slide",
          grabCursor: true,
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        });
      }
    };

    document.body.appendChild(swiperScript);

    return () => {
      if (swiperInstanceRef.current) swiperInstanceRef.current.destroy(true, true);
      document.body.removeChild(swiperScript);
      document.head.removeChild(swiperCSS);
    };
  }, []);

  return (
    <div className="w-full px-2 mt-[2rem]">
      <div ref={swiperRef} className="swiper overflow-hidden shadow-2xl relative rounded-2xl">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="swiper-slide cursor-pointer"
              onClick={() => navigate(slide.link)}
            >
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <h2 className="hidden lg:block text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                    {slide.title}
                  </h2>
                  <p className="hidden lg:block text-lg md:text-xl text-gray-200">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl"></div>
        <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl"></div>

        {/* Pagination */}
        <div className="swiper-pagination !bottom-4"></div>

        {/* Custom Pagination Styles */}
        <style>{`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: white !important;
            border-radius: 2px !important; /* square */
            opacity: 0.8;
            margin: 0 4px !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: white !important;
          }
        `}</style>
      </div>
    </div>
  );
};
