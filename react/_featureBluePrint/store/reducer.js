import types from "./types"

const initState = {};

export default testReducer = (state = initState, action) => {
	const reducers = {
		[types.FEATURE_ACTION_TYPE]: actionCase,
		default: () => state,
	};
	
	return reducers[action.type]
		? reducers[action.type](state, action)
		: reducers['default']();
};

function actionCase(state, action) {
	return {
		...state,
	}
}