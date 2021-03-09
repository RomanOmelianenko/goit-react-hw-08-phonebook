import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { store, persistor } from './redux/store';
import './index.css';

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>   
    </Provider>, document.querySelector('#root'));