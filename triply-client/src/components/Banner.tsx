"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/rbJPS1B/hill.jpg",
    title: "Explore the World",
    description:
      "Discover breathtaking destinations and create unforgettable memories.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/Smz6pCc/saint-martin.jpg",
    title: "Adventure Awaits",
    description: "Embark on thrilling journeys and push your boundaries.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/J2NR9b2/coxs-bazar.jpg",
    title: "Cultural Immersion",
    description: "Experience diverse cultures and broaden your horizons.",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
