import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';

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
    <HeaderNav />
    {children}
  </div>
);

export default Layout;