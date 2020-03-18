export default {
	vehiclesLoadingState(state) {
		if (state.hasError) {
			return 'error';
		}

		if (state.loading) {
			return 'loading';
		}
	},
	vehiclesInvalidState(state) {
		return state.loading || state.hasError;
	},
};
