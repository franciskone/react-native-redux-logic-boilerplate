import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default FeatureScreen = (props) => {
	return (
		<View style={styles.screenContainer}>
			<Text>Feature Screen</Text>
		</View>
	)
}

FeatureScreen.propTypes = {}
FeatureScreen.defaultProps = {}

const styles = StyleSheet.create({
	screenContainer: {}
})