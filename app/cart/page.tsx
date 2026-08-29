export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Wireless Earbuds Pro', price: 99.99, quantity: 1 },
    { id: 2, name: 'Smart Watch Series 5', price: 249.99, quantity: 1 },
    { id: 3, name: 'USB-C Hub Pro', price: 79.99, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-4">Product</th>
                    <th className="text-center py-4">Quantity</th>
                    <th className="text-right py-4">Price</th>
                    <th className="text-right py-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-4">{item.name}</td>
                      <td className="text-center py-4">{item.quantity}</td>
                      <td className="text-right py-4">${item.price.toFixed(2)}</td>
                      <td className="text-right py-4 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-2xl font-bold">
                <span>Total</span>
                <span className="text-blue-600">${total.toFixed(2)}</span>
              </div>

              {shipping === 0 && (
                <p className="text-green-600 text-sm mb-4">✓ Free shipping applied!</p>
              )}

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold mb-3">
                Proceed to Checkout
              </button>

              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-bold">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
