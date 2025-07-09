import React from 'react';
import { HeroSection } from './Home/sections/HeroSection';
import { FeaturesSection } from './Home/sections/FeaturesSection';
import { LabsSection } from './Home/sections/LabsSection';
import { CoursesSection } from './Home/sections/CoursesSection';
import { TestimonialsSection } from './Home/sections/TestimonialsSection';

import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center backdrop-blur-md bg-black/80">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-white">Vulnhut</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
          <a href="#courses" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Courses</a>
          <a href="#reviews" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Reviews</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
           <Link to="/login">
  <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium">Login</button>
</Link>
<Link to="/signup">
  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium ml-2">Sign Up</button>
</Link>

        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16"></div>

      <HeroSection />
      <FeaturesSection />
      <LabsSection />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}