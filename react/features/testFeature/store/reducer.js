import types from "./types"

const initState = {
	count: 0
};

export default testReducer = (state = initState, action) => {
	const reducers = {
		[types.INCREMENT]: incrementCase,
		[types.DECREMENT]: decrementCase,
		[types.RESET]: resetCase,
		default: () => state,
	};
	
	return reducers[action.type]
		? reducers[action.type](state, action)
		: reducers['default']();
};

function incrementCase(state, action) {
	return {
		...state,
		count: state.count + 1,
	}
}

function decrementCase(state, action) {
	const newCount = state.count > 0
		? state.count - 1
		: state.count;
	
	return {
		...state,
		count: newCount,
	}
}

function resetCase(state, action) {
	return {
		...state,
		count: initState.count,
	}
}