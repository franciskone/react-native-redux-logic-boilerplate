import { createStackNavigator } from 'react-navigation';
import routeNames from "./routeNames";
import testScreenConfig from "./screenConfig/testScreenConfig";


export default createStackNavigator({
	[routeNames.TEST]: testScreenConfig,
});