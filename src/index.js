import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'babel-polyfill';
import postersApp, { initialState } from './reducer';
import App from './containers/App';

const store = createStore(postersApp, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
