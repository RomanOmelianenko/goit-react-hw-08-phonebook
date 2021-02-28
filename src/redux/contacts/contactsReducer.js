import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const onAddContact = (state, action) => {
    return [...state, action.payload]
};
const onRemoveContact = (state, action) => {
    return state.filter(contact => contact.id !== action.payload)
};
const onAddFilter = (state, action) => action.payload;

const onShowModal = (state, action) => {
    return !state
};


const contactsItems = createReducer([], {
    [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,  
    [contactsActions.addContactSuccess]: onAddContact,
    [contactsActions.removeContactSuccess]: onRemoveContact
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: onAddFilter
});

const modalWarning = createReducer(false, {
    [contactsActions.showModalWarning]: onShowModal
});

const loading = createReducer(false, {
   
    [contactsActions.addContactRequest]: () => true,
    [contactsActions.addContactSuccess]: () => false,
    [contactsActions.addContactError]: () => false,

    [contactsActions.fetchContactsRequest]: () => true,
    [contactsActions.fetchContactsSuccess]: () => false,
    [contactsActions.fetchContactsError]: () => false,

    [contactsActions.removeContactRequest]: () => true,
    [contactsActions.removeContactSuccess]: () => false,
    [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
    contactsItems,
    filter,
    modalWarning,
    loading
});