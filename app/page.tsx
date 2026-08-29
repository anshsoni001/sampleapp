import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-12 mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to TechStore</h1>
        <p className="text-xl mb-6">Discover the latest gadgets and technology at unbeatable prices</p>
        <Link
          href="/products"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center text-5xl">
              📱
            </div>
            <h3 className="text-xl font-bold mb-2">Wireless Earbuds</h3>
            <p className="text-gray-600 mb-4">Premium sound quality with noise cancellation</p>
            <p className="text-2xl font-bold text-blue-600">$99.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center text-5xl">
              ⌚
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Watch</h3>
            <p className="text-gray-600 mb-4">Track your fitness and stay connected</p>
            <p className="text-2xl font-bold text-blue-600">$249.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center text-5xl">
              💻
            </div>
            <h3 className="text-xl font-bold mb-2">Laptop Stand</h3>
            <p className="text-gray-600 mb-4">Ergonomic design for better posture</p>
            <p className="text-2xl font-bold text-blue-600">$49.99</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="font-bold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $50</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-bold mb-2">Best Prices</h3>
            <p className="text-gray-600">Guaranteed lowest prices in the market</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-bold mb-2">Quality Assured</h3>
            <p className="text-gray-600">All products guaranteed authentic</p>
          </div>
        </div>
      </section>
    </div>
  );
}
