import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public pages
import SignIn from './Compoments/Pages/SignIn';
import SignUp from './Compoments/Pages/SignUp';
import ResetPassword from './Compoments/Pages/ResetPassword';

// Protected pages
import HomePage from './Compoments/Pages/Home';
import Job from './Compoments/Pages/Job';
import Profile from './Compoments/Pages/Profile';
import Connection from './Compoments/Pages/Connection';
import EditProfile from './Compoments/Pages/EditProfile';
import ContactUs from './Compoments/Pages/Contact';
import ComingSoon from './Compoments/Pages/ComingSoon';
import Pricing from './Compoments/Pages/Pricing';
import PrivacyPolicy from './Compoments/Pages/Privacy';
import TermsAndConditions from './Compoments/Pages/Terms';
import FAQPage from './Compoments/Pages/FAQ';
import CompanyProfile from './Compoments/Pages/CompanyProfile';
import BlogSection from './Compoments/Pages/Blog';
import JobMessage from './Compoments/Pages/Messages';
import Notification from './Compoments/Pages/Notification';
import NotFound from './Compoments/Pages/NotFound';

import ProtectedRoute from './Compoments/Pages/ProtectedRoutes';

function AppRoutes() {
  return (
    <Routes>

      {/* Public routes (no login needed) */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected routes (require login) */}
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/jobs" element={<ProtectedRoute><Job /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/connection" element={<ProtectedRoute><Connection /></ProtectedRoute>} />
      <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
      <Route path="/coming-soon" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
      <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
      <Route path="/privacy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
      <Route path="/terms" element={<ProtectedRoute><TermsAndConditions /></ProtectedRoute>} />
      <Route path="/faq" element={<ProtectedRoute><FAQPage /></ProtectedRoute>} />
      <Route path="/company/:companyName" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />
      <Route path="/blog" element={<ProtectedRoute><BlogSection /></ProtectedRoute>} />
      <Route path="/messages" element={<ProtectedRoute><JobMessage /></ProtectedRoute>} />
      <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
      <Route path="/reviews" element={<ProtectedRoute><CompanyProfile /></ProtectedRoute>} />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;
