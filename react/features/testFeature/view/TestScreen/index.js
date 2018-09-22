import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Display from "./components/Display";

export default TestScreen = (props) => {
	return (
		<View style={styles.screenContainer}>
			<Display />
		</View>
	)
}

TestScreen.propTypes = {}
TestScreen.defaultProps = {}

const styles = StyleSheet.create({
	screenContainer: {}
})

