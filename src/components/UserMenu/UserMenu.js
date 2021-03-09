import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import LoaderRed from '../../helpers/Loader/LoaderRed';
import Button from '@material-ui/core/Button';
import Avatar from '../../img/avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 12
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 8,
    fontSize: 14,
    fontFamily: " sans-serif",
    color: "grey"
  },
  username: {
    fontWeight: 700,
    fontSize: 14,
    fontFamily: " sans-serif",
    marginRight: 14,
  }
};

const UserMenu = ({ avatar, name, onLogout, isLoading }) => (
  <div style={styles.container}>
    {!isLoading && (
      <>
        <img src={Avatar} alt="Avatar" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome,</span><span style={styles.username}>{avatar}{name}</span>
    
        <Button type="button" onClick={onLogout} variant="contained" color="secondary">
          Logout
        </Button>
      </>
    )}
    {isLoading && <LoaderRed/>}
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  isLoading: authSelectors.getLoading(state)
  // avatar: Avatar
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);