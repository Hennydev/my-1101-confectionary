"use client";

import { useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "./navbar";
// import clsx from "clsx";

const slides = [
  {
    id: 1,
    image: "/image/hero-meals.jpg",
    title: "Authentic Nigerian Flavors",
    subtitle:
      "Freshly prepared soups, rice dishes and local favorites made with tradition and love.",
    buttonText: "Explore Our Menu",
    buttonLink: "#",
    img: "/image/hero1.png",
  },
  {
    id: 2,
    image: "/image/hero-cake.jpg",
    title: "Sweet Moments, Beautifully Baked",
    subtitle:
      "Rich chocolate cakes and pastries crafted for birthdays, weddings and special celebrations.",
    buttonText: "Order Cakes",
    buttonLink: "#",
    img: "/image/cakes-removebg.png",
  },
  {
    id: 3,
    image: "/image/hero-chops.jpg",
    title: "Small Chops. Big Taste.",
    subtitle:
      "Puff-puff, samosas, spring rolls and more — perfect for parties and events.",
    buttonText: "Order Small Chops",
    buttonLink: "#",
    img: "/image/better-chops-removebg.png",
  },
];


export default function Carousel() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (

  <div className="relative w-full h-screen overflow-hidden" ref={emblaRef}>
    {/* Slides */}
    <div className="flex h-full">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="min-w-full h-screen relative flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Cinematic Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#140a05]/95 via-[#140a05]/85 to-[#140a05]/50"></div>

          {/* HEADER */}
          <div className="absolute top-0 left-0 w-full z-20">
            <Navbar/>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-[90%] md:w-[80%] mx-auto grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT */}
            <div className="text-white space-y-6 mt-20 md:mt-0">
              <p className="uppercase tracking-[4px] text-yellow-500 text-sm">
                Authentic • Fresh • Traditional
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 max-w-xl">
                {slide.subtitle}
              </p>

              <div className="pt-4">
                <a
                  href={slide.buttonLink}
                  className="inline-block px-10 py-4 bg-yellow-600 text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-300 shadow-xl"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>

            {/* RIGHT FOOD IMAGE */}
            <div className="hidden md:flex justify-center relative">
              <img
                src={slide.img}
                alt="Food"
                className="w-[85%] drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] transition duration-700 hover:scale-105"
              />

              {/* Soft Glow Under Food */}
              <div className="absolute -bottom-12 w-3/4 h-14 bg-yellow-600/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* DOTS */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`transition-all duration-300 rounded-full ${
            selectedIndex === index
              ? "w-8 h-3 bg-yellow-600"
              : "w-3 h-3 bg-white/40"
          }`}
        />
      ))}
    </div>
  </div>
);


}
