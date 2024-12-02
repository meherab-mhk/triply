"use client";
import { Link } from "react-router-dom";

const spots = [
  {
    id: 1,
    name: "Longest sea beach",
    location: "Coxs Bazar, Bangladesh",
    image: "https://i.ibb.co.com/FVmtF6p/longest-sea-beach-in.jpg",
  },
  {
    id: 2,
    name: "Hanging Bridge",
    location: "Rangamati, Bangladesh",
    image: "https://i.ibb.co.com/WfVhNXh/rangamati.jpg",
  },
  {
    id: 3,
    name: "Saint's Martin Island",
    location: "Coxs Bazar, Bangladesh",
    image: "https://i.ibb.co.com/gdwq4rW/saint-martin-rashed-kabir.jpg",
  },
  {
    id: 4,
    name: "Sundarban",
    location: "Khulna, Bangladesh",
    image: "https://i.ibb.co.com/7SsfyVk/Sundarban-Tiger.jpg",
  },
  {
    id: 5,
    name: "Mohasthan Ghor",
    location: "Bogra, Bangladesh",
    image: "https://i.ibb.co.com/yRJVc1h/moha.jpg",
  },
  {
    id: 6,
    name: "Jaflong",
    location: "Sylhet, Bangladesh",
    image: "https://i.ibb.co.com/4KnZQZP/sylhet.jpg",
  },
];

export default function TouristSpots() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 ">
        Popular Tourist Spots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spots.map((spot) => (
          <div
            key={spot.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={spot.image} alt="" className="w-full h-[250px]" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 ">{spot.name}</h3>
              <p className="text-gray-600 mb-4">{spot.location}</p>
              <Link
                to=""
                className="btn btn-sm bg-green-400  hover:bg-green-500 transition-colors  font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
