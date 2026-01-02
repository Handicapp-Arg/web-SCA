import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { HomePage, ConnectPage } from '@/pages';
import { LocaleRedirect } from '@/components/LocaleRedirect';
import { LocaleLayout } from '@/components/LocaleLayout';

/**
 * Main App Component
 * Handles routing with locale prefixes for i18n
 * Routes: /:locale (en|es|de) for all pages
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Root redirect to default locale */}
          <Route path="/" element={<LocaleRedirect />} />
          
          {/* Localized routes - LanguageProvider inside */}
          <Route path="/:locale" element={<LanguageProvider><LocaleLayout /></LanguageProvider>}>
            {/* Main Website */}
            <Route index element={<HomePage />} />
            
            {/* QR Connect Page for Events */}
            <Route path="connect" element={<ConnectPage />} />
            <Route path="qr" element={<ConnectPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
