import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { authSelectors } from '../redux/auth';
import Loader from '../helpers/Loader/Loader';
import Button from '@material-ui/core/Button';
import { motion, AnimatePresence } from 'framer-motion';
import fade from '../helpers/fade';
import styles from './LoginView/LoginView.module.css';

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

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    const { isLoading } = this.props;

    return (
      <div >
        {/* <h2 className={styles.Header}>Registration form</h2> */}
        <AnimatePresence>
          <motion.h2
            className={styles.Header}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={fade}
          >
            Registration form
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence>
          <motion.form
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={fade}
            onSubmit={this.handleSubmit}
            className={styles.TaskEditor}
          >
            <label className={styles.TaskEditor_label}>
            Name
            <input
              className={styles.TaskEditor_input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              // autoFocus="on"
              // autoComplete="off"
            />
          </label>

          <label className={styles.TaskEditor_label}>
            Email
            <input
              className={styles.TaskEditor_input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              // autoFocus="on"
              // autoComplete="off"
            />
          </label>

          <label className={styles.TaskEditor_label}>
            Password
            <input
              className={styles.TaskEditor_input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              // autoFocus="on"
              // autoComplete="off"
            />
          </label>

          {!isLoading && (
            <Button type="submit" variant="contained" color="primary" className={styles.Button}>
              Register
            </Button>
          )}

          {isLoading && <Loader/>}
          </motion.form>
        </AnimatePresence>
        
        {/* <form onSubmit={this.handleSubmit} className={styles.TaskEditor}> */}
          

        {/* </form> */}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLoading: authSelectors.getLoading(state)
  }
};

export default connect(mapStateToProps, { onRegister: authOperations.register })(RegisterView);