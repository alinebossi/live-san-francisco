import types from './mutations_types';

export default {
	[types.SET_LOADING](state, isLoading) {
		state.loading = isLoading;
	},
	[types.SET_VEHICLE_LIST](state, list) {
		state.vehicle = {
			...state.vehicle,
			list,
		};
	},
	[types.SET_VEHICLE_HAS_ERROR](state, hasError) {
		state.vehicle = {
			...state.vehicle,
			hasError,
		};
	},
	
};
