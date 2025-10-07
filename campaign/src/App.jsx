import React from "react";
import "./app.css";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="bg-green-600 text-white py-8 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Jamuna Foundation Campaign</h1>
          <p className="mt-2 text-lg">Join us in making a difference – Plant Trees & Save Lives!</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">Tree Plantation Drive</h2>
          <p className="text-gray-700 mb-6">Help us plant trees and contribute to a greener, healthier planet.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* Campaign Info Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <img 
       src="/img.jpeg" 
       alt="Tree Plantation" 
       className="rounded-lg shadow-lg"
      />          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Why Plant Trees?</h2>
            <p className="text-gray-700 mb-4">
              Trees are essential for life. They clean the air, prevent soil erosion, and combat climate change. 
              Join our plantation drive to make a lasting impact on your community and the planet.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-500 transition">
              Participate
            </button>
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section className="bg-red-100 py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Blood Donation Campaign</h2>
            <p className="text-gray-700 mb-4">
              Donate blood and save lives! Every drop counts. Join our initiative to help those in need.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-500 transition">
              Donate Blood
            </button>
          </div>
          <img 
           src="/blood.jpeg" 
           alt="Blood Donation" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2025 Jamuna Foundation. All Rights Reserved.</p>
        <p>
          Visit our website: <a href="https://jamunafoundation.org/" className="text-green-400 hover:underline" target="_blank">jamunafoundation.org</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
