import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.contactsItems;
const getModalwarning = state => state.contacts.modalWarning;
const getContactsItems = state => state.contacts.contactsItems;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contactsItems, filter) => {
    return contactsItems.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );
});

const selestors = {
    getModalwarning,
    getContactsItems,
    getLoading,
    getFilter,
    getVisibleContacts,
};

export default selestors;