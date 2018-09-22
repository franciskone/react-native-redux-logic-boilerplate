import types from "./types"

export default {
	increment,
	decrement,
	reset,
};

function increment() {
	return {
		type: types.INCREMENT
	}
}

function decrement() {
	return {
		type: types.DECREMENT
	}
}

function reset() {
	return {
		type: types.RESET
	}
}