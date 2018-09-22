import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
}

function getNavigator() {
	return _navigator;
}

function getNavigationStack() {
	return getNavigator().state.nav.routes;
}

// add other navigation functions that you need and export them

export default {
	getNavigator,
	getNavigationStack,
	navigate,
	setTopLevelNavigator,
};