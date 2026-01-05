import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * LocaleLayout Component
 * Wrapper for localized routes that ensures proper rendering
 */
export const LocaleLayout: React.FC = () => {
  return <Outlet />;
};
