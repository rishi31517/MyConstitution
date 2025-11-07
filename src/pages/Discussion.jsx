import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getCurrentUser } from '../utils/auth';
import { getDiscussions, addDiscussion, addReplyToDiscussion } from '../utils/localStorage';

const Discussion = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [discussions, setDiscussions] = useState([]);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin');
      return;
    }
    setDiscussions(getDiscussions());
  }, [currentUser, navigate]);

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content) {
      alert('Please fill in all fields');
      return;
    }

    const discussion = addDiscussion({
      title: newPost.title,
      content: newPost.content,
      author: currentUser.name,
      authorEmail: currentUser.email,
      authorRole: currentUser.role
    });

    setDiscussions([...discussions, discussion]);
    setNewPost({ title: '', content: '' });
    setShowNewPost(false);
  };

  const handleReply = (discussionId) => {
    if (!replyContent.trim()) {
      alert('Please enter a reply');
      return;
    }

    addReplyToDiscussion(discussionId, {
      content: replyContent,
      author: currentUser.name,
      authorEmail: currentUser.email,
      authorRole: currentUser.role
    });

    const updated = getDiscussions();
    setDiscussions(updated);
    setSelectedDiscussion(updated.find(d => d.id === discussionId));
    setReplyContent('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Discussion Forum</h1>
            <button
              onClick={() => setShowNewPost(!showNewPost)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {showNewPost ? 'Cancel' : 'New Post'}
            </button>
          </div>

          {showNewPost && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Create New Discussion</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Discussion Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Discussion Content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleCreatePost}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Post Discussion
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {discussions.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600 mb-4">No discussions yet. Be the first to start one!</p>
              <button
                onClick={() => setShowNewPost(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Create First Discussion
              </button>
            </div>
          ) : (
            discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{discussion.title}</h3>
                    <p className="text-gray-600 mb-2">{discussion.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>By {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.authorRole}</span>
                      <span>•</span>
                      <span>{new Date(discussion.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {discussion.replies?.length || 0} replies
                  </span>
                </div>

                {selectedDiscussion?.id === discussion.id ? (
                  <div className="mt-4 border-t pt-4">
                    <div className="space-y-3 mb-4">
                      {discussion.replies?.map((reply) => (
                        <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-800 mb-2">{reply.content}</p>
                          <div className="text-sm text-gray-500">
                            {reply.author} ({reply.authorRole}) • {new Date(reply.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Write a reply..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => handleReply(discussion.id)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        Reply
                      </button>
                      <button
                        onClick={() => setSelectedDiscussion(null)}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedDiscussion(discussion)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Replies ({discussion.replies?.length || 0})
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Discussion;

