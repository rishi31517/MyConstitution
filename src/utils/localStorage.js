// Local Storage utility functions

export const storageKeys = {
  USERS: 'users',
  CURRENT_USER: 'currentUser',
  QUIZ_REPORTS: 'quizReports',
  RIGHTS: 'rights',
  DUTIES: 'duties',
  DISCUSSIONS: 'discussions',
};

// Get rights from localStorage
export const getRights = () => {
  const rights = localStorage.getItem(storageKeys.RIGHTS);
  return rights ? JSON.parse(rights) : [];
};

// Initialize default data
export const initializeData = () => {
  // Initialize users array if it doesn't exist
  if (!localStorage.getItem(storageKeys.USERS)) {
    localStorage.setItem(storageKeys.USERS, JSON.stringify([]));
  }

  // Initialize quiz reports if it doesn't exist
  if (!localStorage.getItem(storageKeys.QUIZ_REPORTS)) {
    localStorage.setItem(storageKeys.QUIZ_REPORTS, JSON.stringify({}));
  }

  // Initialize fundamental rights data
  if (!localStorage.getItem(storageKeys.RIGHTS)) {
    const rights = [
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
    localStorage.setItem(storageKeys.RIGHTS, JSON.stringify(rights));
  }

  // Initialize fundamental duties data
  if (!localStorage.getItem(storageKeys.DUTIES)) {
    const duties = [
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
    localStorage.setItem(storageKeys.DUTIES, JSON.stringify(duties));
  }

  // Initialize discussions if it doesn't exist
  if (!localStorage.getItem(storageKeys.DISCUSSIONS)) {
    localStorage.setItem(storageKeys.DISCUSSIONS, JSON.stringify([]));
  }
};

// User management functions
export const getUsers = () => {
  const users = localStorage.getItem(storageKeys.USERS);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (userData) => {
  const users = getUsers();
  users.push({
    ...userData,
    quizHistory: [],
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(storageKeys.USERS, JSON.stringify(users));
  return true;
};

export const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

export const getCurrentUser = () => {
  const currentUser = localStorage.getItem(storageKeys.CURRENT_USER);
  return currentUser ? JSON.parse(currentUser) : null;
};

export const setCurrentUser = (user) => {
  localStorage.setItem(storageKeys.CURRENT_USER, JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem(storageKeys.CURRENT_USER);
};

// Quiz management functions
export const saveQuizReport = (email, quizData) => {
  const reports = JSON.parse(localStorage.getItem(storageKeys.QUIZ_REPORTS) || '{}');
  if (!reports[email]) {
    reports[email] = [];
  }
  reports[email].push({
    ...quizData,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem(storageKeys.QUIZ_REPORTS, JSON.stringify(reports));

  // Update user's quiz history
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  if (userIndex !== -1) {
    users[userIndex].quizHistory.push({
      score: quizData.score,
      totalQuestions: quizData.totalQuestions,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(storageKeys.USERS, JSON.stringify(users));
  }
};

export const getQuizReports = (email) => {
  const reports = JSON.parse(localStorage.getItem(storageKeys.QUIZ_REPORTS) || '{}');
  return reports[email] || [];
};

// Discussions management
export const getDiscussions = () => {
  const discussions = localStorage.getItem(storageKeys.DISCUSSIONS);
  return discussions ? JSON.parse(discussions) : [];
};

export const addDiscussion = (discussion) => {
  const discussions = getDiscussions();
  discussions.push({
    ...discussion,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    replies: []
  });
  localStorage.setItem(storageKeys.DISCUSSIONS, JSON.stringify(discussions));
  return discussions[discussions.length - 1];
};

export const addReplyToDiscussion = (discussionId, reply) => {
  const discussions = getDiscussions();
  const discussion = discussions.find(d => d.id === discussionId);
  if (discussion) {
    discussion.replies.push({
      ...reply,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem(storageKeys.DISCUSSIONS, JSON.stringify(discussions));
  }
};

