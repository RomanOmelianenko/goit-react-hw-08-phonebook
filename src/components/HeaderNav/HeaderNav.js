import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    padding: 8,
  },
};

const HeaderNav = ({ inLogged }) => {
  return (
    <header style={styles.header}>
      <Navigation />
        {inLogged ? <UserMenu/> : <AuthNav/>}
    </header>
  )
};

const mapStateToProps = state => ({
  inLogged: authSelectors.isLogIn(state)
});

export default connect(mapStateToProps)(HeaderNav);