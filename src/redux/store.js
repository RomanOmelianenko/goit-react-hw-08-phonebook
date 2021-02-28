// import { configureStore } from '@reduxjs/toolkit';
// import contactReducer from './contacts/contactsReducer';

// const store = configureStore({
//     reducer: {
//         contacts: contactReducer
//     },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; /* автоматически сохраняет куски redux state в ljcalstorage при обновлении этого state */
import storage from 'redux-persist/lib/storage';  /* ссылка по умолчанию на local storage */
import thunk from 'redux-thunk'
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authReducer';

// конфиг для redux-persist
const authPersistConfig = {
  key: 'auth', /* возьми мне внутри всего стейта ключ auth и св-во whitelist(взять из всего обьекта одно (или несколько)) */
  storage,                   /* свойство ['token'], blacklist - не сохранять 1 или несколько св-в из обьекта */
  whitelist: ['token'],      /* blacklist: [a, d, r] - пример */
};

// export оригинальный стор - это для Provider
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [thunk],
});

// export результат вызова фун-и persistStore(store) из 'redux-persist' на самом store 
export const persistor = persistStore(store); /* фун-я, которая оборачивает весь наш store и при первой загрузки */
/* будет наполнять, она будет брать всё, что сохранила в local storage и инициализировать наш store этими даными */