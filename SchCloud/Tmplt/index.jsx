import React from 'react';

const HeroBackgroundExamples = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Hero Section Background Examples</h1>
      
      {/* Example 1: Basic Background Image */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">1. Basic Background Image</h2>
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="text-white text-center">
            <h3 className="text-4xl font-bold mb-4">Welcome to Our Site</h3>
            <p className="text-xl">Beautiful mountain landscape background</p>
          </div>
        </div>
      </div>

      {/* Example 2: Background with Overlay */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">2. Background with Dark Overlay</h2>
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">Forest Adventure</h3>
            <p className="text-xl mb-6">Explore the wilderness with us</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start Journey
            </button>
          </div>
        </div>
      </div>

      {/* Example 3: Gradient Overlay */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">3. Background with Gradient Overlay</h2>
        <div 
          className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
          <div className="relative z-10 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">Ocean Views</h3>
            <p className="text-xl mb-6">Discover amazing coastal destinations</p>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Example 4: Full Screen Hero */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">4. Full Screen Hero Section</h2>
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
          <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
            <h3 className="text-6xl font-bold mb-6">Adventure Awaits</h3>
            <p className="text-2xl mb-8">Experience the beauty of nature like never before</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
              Begin Adventure
            </button>
          </div>
        </div>
      </div>

      {/* Example 5: Parallax Effect Simulation */}
      <div className="relative">
        <h2 className="text-xl font-semibold mb-4">5. Background with Fixed Attachment</h2>
        <div 
          className="relative h-96 bg-cover bg-center bg-fixed flex items-center justify-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
          <div className="relative z-10 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">Fixed Background</h3>
            <p className="text-xl">Creates a parallax-like effect when scrolling</p>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Key Tailwind CSS Classes Used:</h2>
        <div className="space-y-2 text-sm font-mono bg-white p-4 rounded">
          <div><span className="text-blue-600">bg-cover</span> - Scales image to cover entire container</div>
          <div><span className="text-blue-600">bg-center</span> - Centers the background image</div>
          <div><span className="text-blue-600">bg-no-repeat</span> - Prevents image repetition</div>
          <div><span className="text-blue-600">bg-fixed</span> - Creates fixed attachment (parallax effect)</div>
          <div><span className="text-blue-600">relative/absolute</span> - For positioning overlays</div>
          <div><span className="text-blue-600">inset-0</span> - Makes overlay cover entire container</div>
          <div><span className="text-blue-600">z-10</span> - Ensures content appears above overlay</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackgroundExamples;