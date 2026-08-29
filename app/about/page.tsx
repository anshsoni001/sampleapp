export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* About Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About TechStore</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to TechStore, your trusted destination for premium technology products and gadgets.
            Founded in 2020, we've been committed to bringing you the latest innovations and highest quality tech
            products at competitive prices.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is simple: to make cutting-edge technology accessible to everyone. We carefully curate
            our product selection to ensure quality, reliability, and value for our customers.
          </p>
          <p className="text-lg text-gray-700">
            With over 10,000 satisfied customers and thousands of 5-star reviews, TechStore has become the go-to
            destination for tech enthusiasts and everyday users alike.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Quality First</h3>
            <p className="text-gray-700">
              We only stock genuine, high-quality products from trusted brands. Your satisfaction is our priority.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-bold mb-2">Customer Care</h3>
            <p className="text-gray-700">
              Our dedicated support team is always ready to help you find the perfect product or resolve any issues.
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-700">
              We stay ahead of tech trends and continuously update our inventory with the latest products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Email:</strong> support@techstore.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-TECH-STORE
              </p>
              <p>
                <strong>Hours:</strong> Monday - Friday, 9AM - 6PM EST
              </p>
              <p>
                <strong>Address:</strong> 123 Tech Avenue, San Francisco, CA 94105
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
            <summary className="font-bold text-lg">Do you offer international shipping?</summary>
            <p className="mt-4 text-gray-700">
              Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
            <summary className="font-bold text-lg">What is your return policy?</summary>
            <p className="mt-4 text-gray-700">
              We offer a 30-day money-back guarantee on all products. If you're not satisfied, simply return it for
              a full refund.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
            <summary className="font-bold text-lg">Are your products authentic?</summary>
            <p className="mt-4 text-gray-700">
              Absolutely! All our products are 100% genuine and sourced directly from authorized dealers and
              manufacturers.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
            <summary className="font-bold text-lg">Do you offer bulk discounts?</summary>
            <p className="mt-4 text-gray-700">
              Yes! Contact our sales team for information about bulk orders and corporate discounts.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
