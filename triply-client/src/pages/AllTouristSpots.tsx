"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TouristSpot {
  id: number;
  image: string;
  tourists_spot_name: string;
  average_cost: number;
  totalVisitorsPerYear: number;
  travel_time: string;
  seasonality: string;
}

export default function AllTouristSpots() {
  const [touristSpots, setTouristSpots] = useState<TouristSpot[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const fetchTouristSpots = async () => {
      // Simulating an API call
      const data: TouristSpot[] = [
        {
          id: 1,
          image: "https://i.ibb.co.com/rbJPS1B/hill.jpg",
          tourists_spot_name: "Eiffel Tower",
          average_cost: 25,
          totalVisitorsPerYear: 7000000,
          travel_time: "3 days",
          seasonality: "Year-round",
        },
        {
          id: 2,
          image: "https://i.ibb.co.com/Smz6pCc/saint-martin.jpg",
          tourists_spot_name: "Great Wall of China",
          average_cost: 35,
          totalVisitorsPerYear: 10000000,
          travel_time: "1 day",
          seasonality: "Spring, Autumn",
        },
        {
          id: 3,
          image: "https://i.ibb.co.com/J2NR9b2/coxs-bazar.jpg",
          tourists_spot_name: "Machu Picchu",
          average_cost: 50,
          totalVisitorsPerYear: 1500000,
          travel_time: "4 days",
          seasonality: "Dry season (May to October)",
        },
        // Add more tourist spots as needed
      ];
      setTouristSpots(data);
    };

    fetchTouristSpots();
  }, []);

  const sortedTouristSpots = [...touristSpots].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.average_cost - b.average_cost;
    } else {
      return b.average_cost - a.average_cost;
    }
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">All Tourist Spots</h1>

      <div className="mb-6 flex gap-4 justify-center items-center">
        <label
          htmlFor="sort-order"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Sort by Average Cost:
        </label>
        <select
          id="sort-order"
          className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-400 focus:border-green-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTouristSpots.map((spot) => (
          <div
            key={spot.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={spot.image} alt="" className="w-full h-[300px]" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {spot.tourists_spot_name}
              </h2>
              <p className="text-gray-600 mb-2">
                Average Cost: ${spot.average_cost}
              </p>
              <p className="text-gray-600 mb-2">
                Visitors per Year: {spot.totalVisitorsPerYear.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-2">
                Travel Time: {spot.travel_time}
              </p>
              <p className="text-gray-600 mb-4">
                Seasonality: {spot.seasonality}
              </p>
              <Link
                to=""
                className=" bg-green-400 btn btn-sm hover:bg-green-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
