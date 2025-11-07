import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getRights } from '../utils/localStorage';

const Rights = () => {
  const [rights, setRights] = useState([]);
  const [selectedRight, setSelectedRight] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const rightsData = localStorage.getItem('rights');
    if (rightsData) {
      setRights(JSON.parse(rightsData));
      setSelectedRight(JSON.parse(rightsData)[0]);
    } else {
      // Initialize if not present
      const defaultRights = [
        {
          id: 1,
          title: 'Right to Equality',
          articles: 'Articles 14-18',
          description: 'Equality before law and equal protection of laws, prohibition of discrimination on grounds of religion, race, caste, sex or place of birth, equality of opportunity in matters of employment, abolition of untouchability and abolition of titles.',
          keyPoints: [
            'Equality before law (Article 14)',
            'Prohibition of discrimination (Article 15)',
            'Equality of opportunity (Article 16)',
            'Abolition of untouchability (Article 17)',
            'Abolition of titles (Article 18)'
          ]
        },
        {
          id: 2,
          title: 'Right to Freedom',
          articles: 'Articles 19-22',
          description: 'Freedom of speech and expression, assembly, association, movement, residence, and settlement, profession, occupation, trade, or business. Protection in respect of conviction for offenses and protection of life and personal liberty.',
          keyPoints: [
            'Freedom of speech and expression (Article 19)',
            'Protection in respect of conviction (Article 20)',
            'Protection of life and personal liberty (Article 21)',
            'Protection against arrest and detention (Article 22)'
          ]
        },
        {
          id: 3,
          title: 'Right against Exploitation',
          articles: 'Articles 23-24',
          description: 'Prohibition of traffic in human beings and forced labor, and prohibition of employment of children in factories, etc.',
          keyPoints: [
            'Prohibition of traffic in human beings and forced labor (Article 23)',
            'Prohibition of employment of children (Article 24)'
          ]
        },
        {
          id: 4,
          title: 'Right to Freedom of Religion',
          articles: 'Articles 25-28',
          description: 'Freedom of conscience and free profession, practice and propagation of religion, freedom to manage religious affairs, freedom from payment of taxes for promotion of any religion, and freedom from attending religious instruction or worship in certain educational institutions.',
          keyPoints: [
            'Freedom of conscience and free profession (Article 25)',
            'Freedom to manage religious affairs (Article 26)',
            'Freedom from taxes for promotion of religion (Article 27)',
            'Freedom from attending religious instruction (Article 28)'
          ]
        },
        {
          id: 5,
          title: 'Cultural and Educational Rights',
          articles: 'Articles 29-30',
          description: 'Protection of interests of minorities, right of minorities to establish and administer educational institutions.',
          keyPoints: [
            'Protection of interests of minorities (Article 29)',
            'Right of minorities to establish educational institutions (Article 30)'
          ]
        },
        {
          id: 6,
          title: 'Right to Constitutional Remedies',
          articles: 'Article 32',
          description: 'The right to move the Supreme Court for enforcement of fundamental rights. This is considered the most important fundamental right as it protects all other rights.',
          keyPoints: [
            'Right to move Supreme Court (Article 32)',
            'Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto',
            'Heart and soul of the Constitution (Dr. B.R. Ambedkar)'
          ]
        }
      ];
      localStorage.setItem('rights', JSON.stringify(defaultRights));
      setRights(defaultRights);
      setSelectedRight(defaultRights[0]);
    }
  }, []);

  const filteredRights = rights.filter(right =>
    right.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    right.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Fundamental Rights
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The Constitution of India guarantees six fundamental rights to all citizens. These rights are enshrined in Part III (Articles 12-35) and are enforceable by courts.
          </p>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search rights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Rights List */}
          <div className="lg:col-span-1 space-y-3">
            {filteredRights.map((right) => (
              <button
                key={right.id}
                onClick={() => setSelectedRight(right)}
                className={`w-full text-left p-4 rounded-lg transition duration-200 ${
                  selectedRight?.id === right.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 shadow hover:shadow-md'
                }`}
              >
                <h3 className="font-bold text-lg mb-1">{right.title}</h3>
                <p className="text-sm opacity-90">{right.articles}</p>
              </button>
            ))}
          </div>

          {/* Selected Right Details */}
          {selectedRight && (
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedRight.articles}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedRight.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {selectedRight.description}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Key Points:</h3>
                <ul className="space-y-3">
                  {selectedRight.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Important Note</h2>
          <p className="text-lg opacity-90">
            Fundamental Rights are not absolute. They can be restricted in the interest of sovereignty, integrity, public order, morality, etc. However, any restriction must be reasonable and not arbitrary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rights;

