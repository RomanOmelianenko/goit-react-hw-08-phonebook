import React from 'react';
import Header from '../Header/Header';

const styles = {
  container: {
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 24px',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <Header />
    {children}
  </div>
);

export default Layout;