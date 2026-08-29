'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 99.99,
    description: 'Premium sound with active noise cancellation',
    icon: '📱',
    category: 'Audio',
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 249.99,
    description: 'Track fitness, health, and stay connected',
    icon: '⌚',
    category: 'Wearables',
  },
  {
    id: 3,
    name: 'Ergonomic Laptop Stand',
    price: 49.99,
    description: 'Improve posture and reduce neck strain',
    icon: '💻',
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'USB-C Hub Pro',
    price: 79.99,
    description: '7-in-1 connectivity hub with 4K support',
    icon: '🔌',
    category: 'Connectivity',
  },
  {
    id: 5,
    name: 'Wireless Charger',
    price: 34.99,
    description: 'Fast charging for all Qi-enabled devices',
    icon: '🔋',
    category: 'Charging',
  },
  {
    id: 6,
    name: 'Portable SSD 1TB',
    price: 129.99,
    description: 'Ultra-fast external storage on the go',
    icon: '💾',
    category: 'Storage',
  },
  {
    id: 7,
    name: 'Webcam 4K',
    price: 159.99,
    description: 'Crystal clear video for streaming and calls',
    icon: '📹',
    category: 'Video',
  },
  {
    id: 8,
    name: 'Mechanical Keyboard',
    price: 169.99,
    description: 'RGB backlit with customizable switches',
    icon: '⌨️',
    category: 'Peripherals',
  },
];

export default function Products() {
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    alert('Product added to cart!');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Filter by Category */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-5xl">
              {product.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-blue-600">${product.price}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        <p className="text-lg mb-4">Items in cart: {cart.length}</p>
        {cart.length > 0 && (
          <div>
            <p className="text-gray-600 mb-4">
              Total: ${(
                cart.reduce((total, id) => {
                  const product = products.find((p) => p.id === id);
                  return total + (product?.price || 0);
                }, 0)
              ).toFixed(2)}
            </p>
            <a
              href="/cart"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              View Cart
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
