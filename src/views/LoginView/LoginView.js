import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
import Loader from '../../helpers/Loader/Loader';
import styles from './LoginView.module.css';
import Button from '@material-ui/core/Button';
import { motion, AnimatePresence } from 'framer-motion';
import fade from '../../helpers/fade';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 4,
//   },
// };

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        {/* <h2 className={styles.Header}>Please, enter email and password for login</h2> */}

        <AnimatePresence>
          <motion.h2
            className={styles.Header}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={fade}
          >
            Please, enter email and password for login
          </motion.h2>
        </AnimatePresence>

        {!isLoading && (
          <>
            <AnimatePresence>
              <motion.form
                className={styles.TaskEditor}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={fade}
                onSubmit={this.handleSubmit}
              >
                <label className={styles.TaskEditor_label}>
                  Email
                  <input
                    className={styles.TaskEditor_input}
                    type="email"
                    name="email"
                    // autoFocus="on"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>

                <label className={styles.TaskEditor_label}>
                    Password
                  <input
                    className={styles.TaskEditor_input}
                    type="password"
                    name="password"
                    // autoFocus="on"
                    placeholder="Enter password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.Button}
                >
                  Login
                </Button>
              </motion.form>
            </AnimatePresence>
              
            {/* <form onSubmit={this.handleSubmit} className={styles.TaskEditor}> */}
              
            {/* </form> */}
          </>
        )}

        {isLoading && <Loader/>}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLoading: authSelectors.getLoading(state)
  }
};

export default connect(mapStateToProps, { onLogin: authOperations.logIn })(LoginView);