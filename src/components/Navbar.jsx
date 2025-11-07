import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <nav className="bg-gradient-to-r from-saffron via-white to-green text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
              🇮🇳 FEDF-PS19
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                Home
              </Link>
              <Link to="/constitution" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                Constitution
              </Link>
              <Link to="/rights" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                Rights
              </Link>
              <Link to="/duties" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                Duties
              </Link>
              <Link to="/quiz" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                Quiz
              </Link>
              {currentUser && (
                <Link to="/discussion" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                  Discussion
                </Link>
              )}
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/50">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                >
                  Dashboard ({currentUser.role})
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

