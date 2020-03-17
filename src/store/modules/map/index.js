import actions from './actions';
import mutations from './mutations';

export default {
	namespaced: true,

	state() {
		return {
			loading: false,
			vehicle: {
				list: null,
				hasError: false,
			},
			map: {
				list: null,
				hasError: false,
			},
		};
	},
	mutations,
	actions,
};
