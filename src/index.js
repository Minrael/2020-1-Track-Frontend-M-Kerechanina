import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
import * as Sentry from '@sentry/browser';
import Boundary from './components/Boundary'


Sentry.init({dsn: "https://121b9d61c17d4ea09de24acee2bfd3c8@o391593.ingest.sentry.io/5237906"});

ReactDOM.render(
    <Provider store={store}>
        <Boundary>
        <App />
        </Boundary>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
