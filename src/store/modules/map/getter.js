export default {
	vehiclesLoadingState(state) {
		if (state.vehicles.hasError) {
			return 'error';
		}

		if (state.loading) {
			return state.loading;
		}
	},
	vehiclesInvalidState(state) {
		return state.loading || state.vehicles.hasError;
	},
};
