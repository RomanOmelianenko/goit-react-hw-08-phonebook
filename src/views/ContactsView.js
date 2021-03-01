import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';

class ContactsView extends Component {

    componentDidMount() {
        this.props.onFetchContacts();
    };

    render() {
        return (
            <div>
                <ContactForm />
                <Filter />
                <ContactList />
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        isLoadingContacts: contactsSelectors.getLoading(state),
    }
};  

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);