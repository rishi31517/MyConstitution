import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Constitution = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      title: 'Preamble',
      content: 'The Preamble to the Constitution of India is a brief introductory statement that sets out the guiding purpose, principles, and philosophy of the Constitution. It declares India to be a Sovereign, Socialist, Secular, Democratic, Republic.',
      keyPoints: [
        'Sovereign: India is free from external control',
        'Socialist: Social and economic equality',
        'Secular: No official state religion',
        'Democratic: Government by the people',
        'Republic: Head of state is elected'
      ]
    },
    {
      title: 'Fundamental Rights',
      content: 'Part III of the Constitution (Articles 12-35) deals with Fundamental Rights. These are basic human rights enshrined in the Constitution and are enforceable by courts.',
      keyPoints: [
        'Right to Equality (Articles 14-18)',
        'Right to Freedom (Articles 19-22)',
        'Right against Exploitation (Articles 23-24)',
        'Right to Freedom of Religion (Articles 25-28)',
        'Cultural and Educational Rights (Articles 29-30)',
        'Right to Constitutional Remedies (Article 32)'
      ]
    },
    {
      title: 'Fundamental Duties',
      content: 'Part IV-A (Article 51A) was added by the 42nd Amendment Act, 1976. It contains 11 Fundamental Duties that every citizen should follow.',
      keyPoints: [
        'Added by 42nd Amendment in 1976',
        'Originally 10 duties, later expanded to 11',
        'Not legally enforceable but morally binding',
        'Promote discipline, commitment, and patriotism'
      ]
    },
    {
      title: 'Directive Principles of State Policy',
      content: 'Part IV (Articles 36-51) contains the Directive Principles of State Policy. These are guidelines for the state to follow while making laws.',
      keyPoints: [
        'Not enforceable by courts',
        'Fundamental in the governance of the country',
        'Aim to establish social and economic democracy',
        'Examples: Right to work, education, and public assistance'
      ]
    },
    {
      title: 'Union Executive',
      content: 'The executive branch of the Union consists of the President, Vice-President, and Council of Ministers headed by the Prime Minister.',
      keyPoints: [
        'President: Head of State (Article 52)',
        'Prime Minister: Head of Government',
        'Council of Ministers: Assists the Prime Minister',
        'Collective responsibility to Lok Sabha'
      ]
    },
    {
      title: 'Judiciary',
      content: 'The Indian judiciary is independent and consists of the Supreme Court, High Courts, and subordinate courts.',
      keyPoints: [
        'Supreme Court: Apex court (Article 124)',
        'High Courts: State-level courts (Article 214)',
        'Judicial Review: Power to review legislation',
        'Public Interest Litigation (PIL)'
      ]
    }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Indian Constitution Framework
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The Constitution of India is the supreme law of India. It was adopted on 26th November 1949 and came into effect on 26th January 1950. It is the longest written constitution of any sovereign country in the world.
          </p>
          
          <div className="bg-gradient-to-r from-saffron via-white to-green p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-3">Key Facts</h2>
            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
              <li>Adopted: 26th November 1949</li>
              <li>Effective: 26th January 1950 (Republic Day)</li>
              <li>Total Articles: 470 (in 1950)</li>
              <li>Parts: 25 Parts</li>
              <li>Schedules: 12 Schedules</li>
              <li>Amendments: 105+ (as of 2024)</li>
            </ul>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.content}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-800">Key Points:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {section.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/rights"
              className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              <h3 className="text-xl font-bold mb-2">Fundamental Rights</h3>
              <p className="opacity-90">Learn about your six fundamental rights</p>
            </Link>
            <Link
              to="/duties"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition duration-200"
            >
              <h3 className="text-xl font-bold mb-2">Fundamental Duties</h3>
              <p className="opacity-90">Understand your responsibilities as a citizen</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constitution;

