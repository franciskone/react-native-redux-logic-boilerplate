import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'


export default DisplayComponent = (props) => {
	return (
		<View style={styles.displayContainer}>
			<Button
				onPress={props.decrement}
				title="-"
			/>
			<Button
				onPress={props.increment}
				title="+"
			/>
			<Button
				onPress={props.reset}
				title="reset"
			/>
			<Text>Count: {props.count}</Text>
		</View>
	)
}

DisplayComponent.propTypes = {}
DisplayComponent.defaultProps = {}

const styles = StyleSheet.create({
	displayContainer: {
		alignItems: 'center'
	}
})

