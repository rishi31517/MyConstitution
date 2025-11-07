import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About FEDF-PS19</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower every Indian citizen with comprehensive knowledge about the Indian Constitution, fundamental rights, and duties through an interactive, accessible, and engaging digital learning platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a more informed and engaged democracy where every citizen understands their constitutional rights and responsibilities, fostering a culture of active citizenship and civic participation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Despite being the world's largest democracy, awareness of the Indian Constitution, fundamental rights, and duties remains limited. Many citizens are unaware of their constitutional rights and responsibilities, leading to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Limited awareness of fundamental rights and how to exercise them</li>
                <li>Lack of understanding of civic responsibilities</li>
                <li>Reduced participation in democratic processes</li>
                <li>Difficulty in accessing reliable constitutional information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                FEDF-PS19 is an interactive web application that provides comprehensive educational resources about the Indian Constitution. Our platform features role-based dashboards, interactive quizzes, discussion forums, and easy-to-understand content that makes constitutional knowledge accessible to everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact Goals</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-gray-800">📚 Education</h3>
                  <p className="text-gray-700">Educate Indian citizens on their constitutional rights and duties</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-gray-800">🤝 Engagement</h3>
                  <p className="text-gray-700">Create an engaging platform for civic learning and collaboration</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-gray-800">✅ Verification</h3>
                  <p className="text-gray-700">Promote verified and simplified constitutional knowledge</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-gray-800">👥 Participation</h3>
                  <p className="text-gray-700">Encourage participation from educators, legal experts, and youth</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Stack</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li>✅ React (Vite)</li>
                  <li>✅ React Router DOM</li>
                  <li>✅ Tailwind CSS</li>
                  <li>✅ Local Storage (Client-side)</li>
                  <li>✅ Responsive Design</li>
                  <li>✅ Modern JavaScript (ES6+)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Team Structure</h2>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-blue-600 p-4">
                  <h3 className="font-bold text-gray-800">Frontend Developer</h3>
                  <p className="text-gray-600">Develop UI and authentication system using React + Local Storage</p>
                </div>
                <div className="bg-white border-l-4 border-green-600 p-4">
                  <h3 className="font-bold text-gray-800">Educator/Advisor</h3>
                  <p className="text-gray-600">Design content on fundamental rights, duties, and amendments</p>
                </div>
                <div className="bg-white border-l-4 border-purple-600 p-4">
                  <h3 className="font-bold text-gray-800">Legal Expert</h3>
                  <p className="text-gray-600">Verify information and provide expert insights</p>
                </div>
                <div className="bg-white border-l-4 border-orange-600 p-4">
                  <h3 className="font-bold text-gray-800">UI/UX Designer</h3>
                  <p className="text-gray-600">Design clean, responsive, and accessible layouts</p>
                </div>
                <div className="bg-white border-l-4 border-red-600 p-4">
                  <h3 className="font-bold text-gray-800">Admin / Project Lead</h3>
                  <p className="text-gray-600">Oversee project direction and ensure data authenticity</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-saffron via-white to-green p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Involved</h2>
              <p className="text-lg text-gray-700 mb-4">
                Join us in our mission to promote constitutional awareness and civic engagement. Whether you're a student, educator, legal expert, or citizen, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 text-center"
                >
                  Sign Up Today
                </a>
                <a
                  href="/constitution"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 text-center"
                >
                  Start Learning
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

