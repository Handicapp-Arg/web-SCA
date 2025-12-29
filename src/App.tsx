import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { HomePage, ConnectPage } from '@/pages';

/**
 * Main App Component
 * Handles routing between main website and connect page
 */
const App: React.FC = () => {
  return (
    <LanguageProvider defaultLanguage="en">
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Main Website */}
            <Route path="/" element={<HomePage />} />
            
            {/* QR Connect Page for Events */}
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/qr" element={<ConnectPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
