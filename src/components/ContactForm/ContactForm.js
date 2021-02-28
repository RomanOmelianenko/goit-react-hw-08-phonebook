import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

        const sameNameContact = this.props.contactsItems
            .map(contact => contact.name)
            .includes(name);
        
        const inputNumber = Number(number)

        if (sameNameContact) {
            this.props.onSameNameContact();
            setTimeout(() => {
                this.props.onSameNameContact();
            }, 1500);
        } else if (name.length === 0) {
            alert("Field 'Name' must be filled!");
        } else if (number.length === 0) {
            alert("Field 'Number' must be filled!")
        } else if (!inputNumber) {
            alert("Insert the number")
        } else {
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
                            type="text"
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
                    <input
                        className={styles.TaskEditor_input}
                        type="text"
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
