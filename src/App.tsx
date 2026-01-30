import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { HomePage, ConnectPage } from '@/pages';
import { LocaleRedirect } from '@/components/LocaleRedirect';
import { MainLayout } from '@/components/layout/MainLayout';

/**
 * Main App Component
 * Handles routing with locale prefixes for i18n
 * Routes: /:locale (en|es|de) for all pages
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Root redirect to default locale */}
        <Route path="/" element={<LocaleRedirect />} />
        {/* Localized routes - LanguageProvider + MainLayout global */}
        <Route path="/:locale" element={<LanguageProvider><MainLayout /></LanguageProvider>}>
          <Route index element={<HomePage />} />
          <Route path="connect" element={<ConnectPage />} />
          <Route path="qr" element={<ConnectPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
