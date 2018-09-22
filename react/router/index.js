import { createStackNavigator } from 'react-navigation';
import routeNames from "./routeNames";
import testScreenConfig from "./config/testScreenConfig";


export default createStackNavigator({
	[routeNames.TEST]: testScreenConfig,
});