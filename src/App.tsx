import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPageLayout from './components/pages/about.page';
import ContactsPageLayout from './components/pages/contacts.page';
import ImageDetailsLayoutPage from './components/pages/image-details.page';
import LayoutPage from './components/pages/layout.page';
import SettingsPageLayout from './components/pages/settings.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />} />
      <Route path="/:id" element={<ImageDetailsLayoutPage />} />
      <Route path="/about" element={<AboutPageLayout />} />
      <Route path="/contacts" element={<ContactsPageLayout />} />
      <Route path="/settings" element={<SettingsPageLayout />} />
    </Routes>
  );
}

export default App;
