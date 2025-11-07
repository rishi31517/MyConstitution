# Quick Start Guide

## 🚀 Getting Started

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or the port shown in terminal)

### Step 3: Create Your First Account

1. Click **"Sign Up"** in the navigation
2. Fill in your details:
   - Name
   - Email
   - Password (min 6 characters)
   - Select Role: Citizen, Educator, Legal Expert, or Admin
3. Click **"Sign Up"**
4. You'll be redirected to Sign In page
5. Sign in with your credentials

### Step 4: Explore the Platform

- **Home**: Landing page with feature overview
- **Constitution**: Learn about the Indian Constitution framework
- **Rights**: Explore the six fundamental rights
- **Duties**: Understand the 11 fundamental duties
- **Quiz**: Take interactive quizzes to test your knowledge
- **Dashboard**: View your role-based dashboard with stats and progress
- **Discussion**: Engage in community discussions (requires sign in)

## 🎯 Testing Different Roles

To test different role-based dashboards:

1. **Citizen**: Default role - can view content, take quizzes, participate in discussions
2. **Educator**: Can review discussions, manage educational content
3. **Legal Expert**: Can verify data, answer queries, add case studies
4. **Admin**: Can manage all users, view analytics, control content

Create multiple accounts with different roles to see the role-based features!

## 📊 Data Storage

All data is stored in **Browser Local Storage**:
- User accounts and credentials
- Quiz scores and history
- Discussion posts
- Educational content (rights & duties)

**Note**: Data is stored locally in your browser and will persist until you clear browser data.

## 🛠️ Troubleshooting

### Port Already in Use
If port 5173 is in use, Vite will automatically use the next available port.

### Local Storage Issues
- Open Browser DevTools (F12)
- Go to Application > Local Storage
- Clear all data if needed
- Refresh the page

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## ✅ Checklist for Hackathon Demo

- [ ] Sign Up with different roles
- [ ] Sign In functionality
- [ ] Navigate through educational content
- [ ] Take a quiz and view results
- [ ] Check role-based dashboard features
- [ ] Create and participate in discussions
- [ ] Show Local Storage data in DevTools
- [ ] Demonstrate responsive design on mobile

---

Happy Learning! 🇮🇳

