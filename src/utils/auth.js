// Authentication utilities

export const signUp = (name, email, password, role) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Check if user already exists
  if (users.find(user => user.email === email)) {
    return { success: false, message: 'Email already registered' };
  }

  // Create new user
  const newUser = {
    name,
    email,
    password, // In production, this should be hashed
    role,
    quizHistory: [],
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  return { success: true, user: newUser };
};

export const signIn = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }

  // Store current user (without password)
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));

  return { success: true, user: userWithoutPassword };
};

export const signOut = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('currentUser');
};

