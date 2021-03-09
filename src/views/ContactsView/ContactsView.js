import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import HeaderForm from '../../components/ContactForm/HeaderForm/HeaderForm';
import LogoForm from '../../components/ContactForm/LogoForm/LogoForm';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import Loader from '../../helpers/Loader/Loader';
import './ContactsView.css';

class ContactsView extends Component {

    componentDidMount() {
        this.props.onFetchContacts();
    };

    render() {
        return (
            <div className="Wrapper">
                
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames="HeaderAppear"
                    unmountOnExit
                >
                {stage => {
                    // console.log(stage);
                    return (
                        <div className="Header">

                            <HeaderForm />

                            <CSSTransition
                                in={stage === 'entered'}
                                timeout={500}
                                classNames="LogoAppear"
                                unmountOnExit
                            >
                                <LogoForm />

                            </CSSTransition>
                        </div>
                    )
                }}
                </CSSTransition>

                <ContactForm />

                <CSSTransition
                    in={this.props.contactsItems.length > 1}
                    timeout={250}
                    classNames="FilterAppear"
                    unmountOnExit
                >
                    <Filter/>
                </CSSTransition>

                {this.props.isLoadingContacts && <Loader />}

                <CSSTransition
                    in={this.props.contactsItems.length > 0}
                    timeout={250}
                    classNames="ContactsAppear"
                    unmountOnExit
                >
                    <h2 className="ContactsName">
                        Contacts
                    </h2>
                </CSSTransition>

                <ContactList />
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        contactsItems: contactsSelectors.getContactsItems(state),
        isLoadingContacts: contactsSelectors.getLoading(state),
    }
};  

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);