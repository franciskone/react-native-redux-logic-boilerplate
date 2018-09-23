/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import Router from './router'
import NavigationService from "./common/navigationService"
import enableNetworkDebugUtil from "./common/util/enableNetworkDebugUtil"

type Props = {};
export default class App extends Component<Props> {
	
	componentDidMount() {
		enableNetworkDebugUtil();
	}
 
	render() {
	  return (
      <SafeAreaView style={styles.container}>
	      <Router
		      ref={ref => NavigationService.setTopLevelNavigator(ref)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
