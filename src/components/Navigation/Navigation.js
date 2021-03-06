import React from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    fontSize: 20,
    fontFamily: "Roboto, sans-serif"
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = ({ isLogged }) => (
  <nav>
    <NavLink
      to='/'
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Home
    </NavLink>

    {isLogged && (
      <NavLink
        to='/contacts'
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink> 
    )}
  </nav>
);

export default withAuth(Navigation);