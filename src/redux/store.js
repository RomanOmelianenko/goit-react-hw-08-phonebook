import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';  
import thunk from 'redux-thunk'
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';

const authPersistConfig = {
  key: 'auth', 
  storage,                   
  whitelist: ['token'],      
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [thunk],
});

export const persistor = persistStore(store); 