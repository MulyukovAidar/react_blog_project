import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import Footer from '../../molecules/Footer/Footer';
import styles from './styles.module.css';

const MainTemplate = ({ children }) => (
  <div>
    <div className={styles.main}>
        <Navbar />
        {children}
    </div>
    <Footer />
  </div>
);

export default MainTemplate;
