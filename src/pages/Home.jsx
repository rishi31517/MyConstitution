import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-saffron via-white to-green text-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FEDF-PS19: Indian Constitution Awareness
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Empowering Every Citizen — Learn, Engage, and Uphold the Indian Constitution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/constitution"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore the Constitution
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Learn</h3>
              <p className="text-gray-600 mb-4">
                Explore the Indian Constitution's framework, fundamental rights, and duties in an interactive format.
              </p>
              <Link to="/constitution" className="text-blue-600 hover:text-blue-800 font-medium">
                Explore →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Quiz</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge with interactive quizzes and track your progress over time.
              </p>
              <Link to="/quiz" className="text-blue-600 hover:text-blue-800 font-medium">
                Take Quiz →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Discuss</h3>
              <p className="text-gray-600 mb-4">
                Engage with fellow citizens, educators, and legal experts in meaningful discussions.
              </p>
              <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">
                Join Discussion →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">🧑‍⚖️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Fundamental Rights</h3>
              <p className="text-gray-600 mb-4">
                Understand your six fundamental rights and how they protect you as a citizen.
              </p>
              <Link to="/rights" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn Rights →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Fundamental Duties</h3>
              <p className="text-gray-600 mb-4">
                Discover your responsibilities as a citizen to uphold the Constitution.
              </p>
              <Link to="/duties" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn Duties →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Track your learning progress, quiz scores, and access role-based features.
              </p>
              <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">
                View Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Why This Matters
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Despite being the world's largest democracy, awareness of the Indian Constitution, fundamental rights, and duties remains limited. This project aims to bridge that gap through an interactive digital learning platform that educates citizens, students, and educators about the Constitution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower every Indian citizen with knowledge about their constitutional rights and duties, fostering a more informed and engaged democracy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of citizens learning about the Indian Constitution
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 inline-block"
          >
            Sign Up Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

