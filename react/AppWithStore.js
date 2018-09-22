import React from 'react';
import store from "./store";
import App from "./App";
import {Provider} from "react-redux";

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};