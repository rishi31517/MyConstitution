import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getCurrentUser, signOut } from '../utils/auth';
import { getQuizReports, getUsers, getDiscussions } from '../utils/localStorage';
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [activeTab, setActiveTab] = useState('overview');
  const [quizReports, setQuizReports] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin');
      return;
    }

    if (currentUser.email) {
      const reports = getQuizReports(currentUser.email);
      setQuizReports(reports);
    }

    if (currentUser.role === 'Admin') {
      setAllUsers(getUsers());
    }

    setDiscussions(getDiscussions());
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  const renderCitizenDashboard = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Quiz Attempts</h3>
          <p className="text-4xl font-bold text-blue-600">{quizReports.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-2">Best Score</h3>
          <p className="text-4xl font-bold text-green-600">
            {quizReports.length > 0
              ? `${Math.max(...quizReports.map(r => r.percentage))}%`
              : 'N/A'}
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-purple-800 mb-2">Avg Score</h3>
          <p className="text-4xl font-bold text-purple-600">
            {quizReports.length > 0
              ? `${Math.round(quizReports.reduce((sum, r) => sum + r.percentage, 0) / quizReports.length)}%`
              : 'N/A'}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Recent Quiz Attempts</h3>
        {quizReports.length > 0 ? (
          <div className="space-y-4">
            {quizReports.slice(-5).reverse().map((report, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="font-semibold text-gray-800">
                  Score: {report.score}/{report.totalQuestions} ({report.percentage}%)
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(report.timestamp).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No quiz attempts yet. <Link to="/quiz" className="text-blue-600 hover:underline">Take your first quiz!</Link></p>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/quiz" className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Take Quiz</h3>
          <p>Test your knowledge</p>
        </Link>
        <Link to="/rights" className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Learn Rights</h3>
          <p>Explore your fundamental rights</p>
        </Link>
        <Link to="/discussion" className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Discussions</h3>
          <p>Engage with the community</p>
        </Link>
      </div>
    </div>
  );

  const renderEducatorDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Educator Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Create Educational Modules</h4>
            <p className="text-gray-600 text-sm">Design and publish educational content</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Host Sessions</h4>
            <p className="text-gray-600 text-sm">Organize live or recorded sessions</p>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Review Discussions</h4>
            <p className="text-gray-600 text-sm">Engage with user questions</p>
          </div>
          <div className="border-l-4 border-orange-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Mentorship</h4>
            <p className="text-gray-600 text-sm">Provide civic awareness guidance</p>
          </div>
        </div>
      </div>

      {activeTab === 'discussions' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Recent Discussions</h3>
          {discussions.length > 0 ? (
            <div className="space-y-4">
              {discussions.slice(-5).reverse().map((discussion) => (
                <div key={discussion.id} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">{discussion.title}</h4>
                  <p className="text-sm text-gray-600">{discussion.content}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    By {discussion.author} • {new Date(discussion.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No discussions yet.</p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/constitution" className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Update Content</h3>
          <p>Manage educational materials</p>
        </Link>
        <Link to="/rights" className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Review Content</h3>
          <p>Verify constitutional information</p>
        </Link>
      </div>
    </div>
  );

  const renderLegalExpertDashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Legal Expert Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Verify Data</h4>
            <p className="text-gray-600 text-sm">Ensure accuracy of constitutional information</p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Clarify Queries</h4>
            <p className="text-gray-600 text-sm">Answer legal questions from users</p>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Add Case Studies</h4>
            <p className="text-gray-600 text-sm">Provide verified case studies</p>
          </div>
          <div className="border-l-4 border-orange-600 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2">Update Amendments</h4>
            <p className="text-gray-600 text-sm">Keep content current with latest amendments</p>
          </div>
        </div>
      </div>

      {activeTab === 'discussions' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Legal Queries</h3>
          {discussions.length > 0 ? (
            <div className="space-y-4">
              {discussions.slice(-5).reverse().map((discussion) => (
                <div key={discussion.id} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">{discussion.title}</h4>
                  <p className="text-sm text-gray-600">{discussion.content}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    By {discussion.author} • {new Date(discussion.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No legal queries yet.</p>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/rights" className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Verify Rights</h3>
          <p>Review fundamental rights content</p>
        </Link>
        <Link to="/duties" className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Verify Duties</h3>
          <p>Review fundamental duties content</p>
        </Link>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">{allUsers.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-green-800 mb-2">Citizens</h3>
          <p className="text-3xl font-bold text-green-600">
            {allUsers.filter(u => u.role === 'Citizen').length}
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-purple-800 mb-2">Educators</h3>
          <p className="text-3xl font-bold text-purple-600">
            {allUsers.filter(u => u.role === 'Educator').length}
          </p>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-orange-800 mb-2">Legal Experts</h3>
          <p className="text-3xl font-bold text-orange-600">
            {allUsers.filter(u => u.role === 'Legal Expert').length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">User Management</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Quiz Attempts</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-2">{user.quizHistory?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/rights" className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Manage Content</h3>
          <p>Add, edit, or remove content</p>
        </Link>
        <Link to="/duties" className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">Monitor Engagement</h3>
          <p>View user activity</p>
        </Link>
        <Link to="/about" className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition duration-200 text-center">
          <h3 className="text-xl font-bold mb-2">System Settings</h3>
          <p>Manage platform settings</p>
        </Link>
      </div>
    </div>
  );

  const renderDashboard = () => {
    switch (currentUser.role) {
      case 'Admin':
        return renderAdminDashboard();
      case 'Educator':
        return renderEducatorDashboard();
      case 'Legal Expert':
        return renderLegalExpertDashboard();
      default:
        return renderCitizenDashboard();
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {currentUser.name}'s Dashboard
                </h1>
                <p className="text-gray-600">
                  Role: <span className="font-semibold text-blue-600">{currentUser.role}</span>
                </p>
              </div>
            </div>

            {/* Tabs */}
            {(currentUser.role === 'Educator' || currentUser.role === 'Legal Expert') && (
              <div className="flex space-x-4 border-b mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 font-semibold ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('discussions')}
                  className={`px-4 py-2 font-semibold ${
                    activeTab === 'discussions'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Discussions
                </button>
              </div>
            )}
          </div>

          {renderDashboard()}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;

