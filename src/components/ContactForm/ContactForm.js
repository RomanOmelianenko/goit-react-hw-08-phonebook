import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
        onAddContact: PropTypes.func
    };
    
    state = {
        name: "",
        number: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        
        const { name, number } = this.state;

        const sameNameContact = name => {
            return this.props.contactsItems
            .map(contact => contact.name)
            .includes(name);
        }
        
        // const inputNumber = Number(number)

        if (sameNameContact(name)) {
            error({
                title: 'Error',
                text: `Name "${name}" already exist`
            })
        
        } else if (name.length === 0) {
            info({
                title: 'Info',
                text: "Field 'Name' must be filled!"
            });
        } else if (number.length === 0) {
            info({
                title: 'Info',
                text: "Field 'Number' must be filled!"
            })
        // } else if (name === '' || number === '') {
        //     alert("All fields must be filled")
        }
        // else if (!inputNumber) {
        //     info({
        //         title: 'Info',
        //         text: 'Enter the number!'
        //     })
        // }
        else {
            this.props.onAddContact({ ...this.state });
        }

        this.setState({ name: "", number: "" });
    };
  
    render() {
        return (
            <form
                className={styles.TaskEditor}
                onSubmit={this.handleSubmit}>
                <label
                    className={styles.TaskEditor_label}>
                    Name
                        <input
                            className={styles.TaskEditor_input}
                            type="tel"
                            name="name"
                            placeholder="Your name"
                            autoComplete="off"
                            autoFocus="on"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                </label>

                <label
                    className={styles.TaskEditor_label}>
                    Number
                    <NumberFormat
                        format="(###) ###-##-##"
                        mask="_"
                        // pattern="^[0-9\s\(\)\-]{15}"
                        className={styles.TaskEditor_input}
                        type="tel"
                        name="number"
                        placeholder="Your number"
                        autoComplete="off"
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>

                <button
                    className={styles.TaskEditor_button}
                    type="submit">
                    Add contact
                </button>
            </form>
        );
    };
};

const mapStateToProps = state => {
  return {
      contactsItems: contactsSelectors.getContactsItems(state),
  }
};

const mapDispatchToProps = {
    onAddContact: contactsOperations.addContact,
    onSameNameContact: contactsActions.showModalWarning
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
