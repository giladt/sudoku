import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.scss';

const Layout:React.FC = ({children}) => {
  return (
    <main className={styles.app}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;