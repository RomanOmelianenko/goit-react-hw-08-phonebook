import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';
// import { authSelectors } from '../redux/auth';

class ContactsView extends Component {

    // 111 Заместь этого делаем свои кастомные компоненты, которые расширяют функционал базавого раута
    // приватный и публичный рауты, которые под капотом будут делать приблизительно тоже, что ниже
    //  componentDidMount() {
    //     /* для приватного маршрута - если пользователь не зарег, сделать Redirect */
    //     if (!this.props.isLogged) {
    //         this.props.history.replace('/login');   /* если пользователь не зарег, верни на /login */

    //         return; /* если пользователь не зарег делаем return чтобы дальше не выполнился код */
    //     };
    //     // проверь состояние авторизации и если польз не зарег то перенаправь его (в этом случае на /login)
    // // --------------------------------------------------------------------------

    //     this.props.onFetchContacts();
    // };

    // // делаем для logout приватный маршрут. Если польз сделал logout раправляем его на /login
    // componentDidUpdate() {
    //     if (!this.props.isLogged) {
    //         this.props.history.replace('/login');

    //         return;
    //     };
    // }; 
    // ------------------------------------------------------------------------------------- 

    componentDidMount() {
        this.props.onFetchContacts();
    };

    render() {
        return (
            <div>
                <ContactForm />
                <Filter />
                <ContactList />
                {/* <h2>Contacts List</h2> */}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        isLoadingContacts: contactsSelectors.getLoading(state),
        // isLogged: authSelectors.isLogIn(state),                 /*для 111 для приватного маршрута */
    }
};  

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);