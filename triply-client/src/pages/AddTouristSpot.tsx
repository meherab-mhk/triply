"use client";

export default function AddTouristSpot() {
  return (
    <div className="container mx-auto py-10 px-4 w-2/4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Tourist Spot</h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label
            htmlFor="tourists_spot_name"
            className="block text-sm font-medium text-gray-700"
          >
            Tourist Spot Name
          </label>
          <input
            type="text"
            id="tourists_spot_name"
            name="tourists_spot_name"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Eiffel Tower"
          />
        </div>

        <div>
          <label
            htmlFor="country_name"
            className="block text-sm font-medium text-gray-700"
          >
            Country Name
          </label>
          <input
            type="text"
            id="country_name"
            name="country_name"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="France"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Paris, France"
          />
        </div>

        <div>
          <label
            htmlFor="short_description"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            required
            rows={3}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 resize-none"
            placeholder="A brief description of the tourist spot"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="average_cost"
            className="block text-sm font-medium text-gray-700"
          >
            Average Cost
          </label>
          <input
            type="number"
            id="average_cost"
            name="average_cost"
            required
            min="0"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="100"
          />
        </div>

        <div>
          <label
            htmlFor="seasonality"
            className="block text-sm font-medium text-gray-700"
          >
            Seasonality
          </label>
          <select
            id="seasonality"
            name="seasonality"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Select best season to visit</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
            <option value="year-round">Year-round</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="travel_time"
            className="block text-sm font-medium text-gray-700"
          >
            Travel Time
          </label>
          <input
            type="text"
            id="travel_time"
            name="travel_time"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="7 days"
          />
        </div>

        <div>
          <label
            htmlFor="totalVisitorsPerYear"
            className="block text-sm font-medium text-gray-700"
          >
            Total Visitors Per Year
          </label>
          <input
            type="number"
            id="totalVisitorsPerYear"
            name="totalVisitorsPerYear"
            required
            min="0"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="10000"
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <button
            type="submit"
            className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
          >
            Add New Spot
          </button>
        </div>
      </form>
    </div>
  );
}
