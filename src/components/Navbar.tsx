import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-800">TheHealthIntelHub</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                location.pathname === '/' ? 'font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                location.pathname === '/about' ? 'font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/symptoms"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}