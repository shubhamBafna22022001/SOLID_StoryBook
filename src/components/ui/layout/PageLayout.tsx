import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import CustomHeader from './CustomHeader'; // ⬅️ Replacing Header

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CustomHeader />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
      <Footer />
    </div>
  );
}
