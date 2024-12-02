const countries = [
  {
    id: 1,
    name: "Japan",
    image: "https://i.ibb.co.com/55tzHmg/pexels-photo-402028.jpg",
    description: "Land of the Rising Sun",
  },
  {
    id: 2,
    name: "Thailand",
    image:
      "https://i.ibb.co.com/NCCVZQF/thailand-monks-temple-tourism-161183.jpg",
    description: "Home of Art and Cuisine",
  },
  {
    id: 3,
    name: "Vietnam",
    image:
      "https://images.pexels.com/photos/2181111/pexels-photo-2181111.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Adventure Down Under",
  },
  {
    id: 4,
    name: "Indonesia",
    image:
      "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Vibrant Culture and Nature",
  },
];

export default function CountriesSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-12">
        Explore Countries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <div
            key={country.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={country.image} alt="" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
              <p className="text-gray-600">{country.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
