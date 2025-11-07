import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Duties = () => {
  const [duties, setDuties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const dutiesData = localStorage.getItem('duties');
    if (dutiesData) {
      setDuties(JSON.parse(dutiesData));
    } else {
      // Initialize if not present
      const defaultDuties = [
        {
          id: 1,
          duty: 'To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem',
          description: 'Every citizen must respect the Constitution, national symbols, and democratic institutions.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 2,
          duty: 'To cherish and follow the noble ideals which inspired our national struggle for freedom',
          description: 'Remember and honor the sacrifices made during the freedom struggle.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 3,
          duty: 'To uphold and protect the sovereignty, unity and integrity of India',
          description: 'Maintain the unity and integrity of the nation above all personal interests.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 4,
          duty: 'To defend the country and render national service when called upon to do so',
          description: 'Be ready to serve and defend the nation when required.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 5,
          duty: 'To promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities; to renounce practices derogatory to the dignity of women',
          description: 'Promote unity in diversity and respect women.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 6,
          duty: 'To value and preserve the rich heritage of our composite culture',
          description: 'Protect and preserve India\'s cultural heritage.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 7,
          duty: 'To protect and improve the natural environment including forests, lakes, rivers and wild life, and to have compassion for living creatures',
          description: 'Protect the environment and show compassion to all living beings.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 8,
          duty: 'To develop the scientific temper, humanism and the spirit of inquiry and reform',
          description: 'Promote scientific thinking, humanism, and rational inquiry.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 9,
          duty: 'To safeguard public property and to abjure violence',
          description: 'Protect public property and avoid violence.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 10,
          duty: 'To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement',
          description: 'Pursue excellence in all activities for national progress.',
          addedBy: '42nd Amendment, 1976'
        },
        {
          id: 11,
          duty: 'To provide opportunities for education to his child or ward between the age of six and fourteen years',
          description: 'Ensure children between 6-14 years receive education.',
          addedBy: '86th Amendment, 2002'
        }
      ];
      localStorage.setItem('duties', JSON.stringify(defaultDuties));
      setDuties(defaultDuties);
    }
  }, []);

  const filteredDuties = duties.filter(duty =>
    duty.duty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    duty.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Fundamental Duties
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The Fundamental Duties are a set of 11 moral obligations for all Indian citizens. They were added to the Constitution by the 42nd Amendment Act, 1976, and later expanded by the 86th Amendment Act, 2002.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Historical Context</h2>
            <p className="text-gray-700">
              The Fundamental Duties were inspired by the Constitution of the former Soviet Union. While they are not legally enforceable like Fundamental Rights, they serve as a constant reminder to citizens of their responsibilities towards the nation.
            </p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search duties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredDuties.map((duty) => (
            <div key={duty.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Duty {duty.id}
                </span>
                <span className="text-xs text-gray-500">{duty.addedBy}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {duty.duty}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {duty.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Fundamental Duties Matter</h2>
          <p className="text-lg opacity-90 mb-4">
            While Fundamental Rights ensure our freedoms, Fundamental Duties remind us of our responsibilities. These duties are essential for maintaining the balance between rights and responsibilities in a democracy.
          </p>
          <ul className="list-disc list-inside space-y-2 opacity-90">
            <li>They promote discipline and commitment among citizens</li>
            <li>They help maintain social harmony and national integrity</li>
            <li>They encourage active participation in nation-building</li>
            <li>They complement Fundamental Rights by ensuring responsible citizenship</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Duties;

