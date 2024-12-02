export default function Newsletter() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">
          Stay updated with the latest travel deals and destination insights.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-gray-900 w-full md:w-64"
            required
          />
          <button
            type="submit"
            className="bg-green-400  px-6 py-2 rounded-md font-semibold hover:bg-green-500 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
