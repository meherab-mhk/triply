const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "The trip was absolutely amazing! Every detail was taken care of, and I made memories that will last a lifetime.",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Rome, Italy",
    quote:
      "I have traveled with many companies, but this one truly stands out. The personalized service was exceptional.",
    avatar:
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    quote:
      "From booking to return, everything was seamless. I will definitely be using their services again for my next adventure.",
    avatar:
      "https://images.pexels.com/photos/15638022/pexels-photo-15638022/free-photo-of-portrait-of-pensive-girl.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Travelers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <img src={testimonial.avatar} alt="" className="w-full h-[200px]" />
            <div className="flex items-center mb-4">
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
