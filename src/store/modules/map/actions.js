
import Map from '@/services/map';
import types from './mutations_types';

export default {
	async getVehicles({ commit }, route) {
		try {
			commit(types.SET_LOADING, true);
            commit(types.SET_VEHICLE_HAS_ERROR, false);
    
            const vehicle = await Map.getVehicles(route);

			if (!Array.isArray(vehicle)) {
				commit(types.SET_VEHICLE_HAS_ERROR, true);
			} else {
				commit(types.SET_VEHICLE_LIST, vehicle);
			}
		} catch (e) {
			commit(types.SET_VEHICLE_HAS_ERROR, true);
		} finally {
			commit(types.SET_LOADING, false);
		}
    },
    async getMap({ commit }, route) {
		try {
			commit(types.SET_LOADING, true);
            commit(types.SET_MAP_HAS_ERROR, false);
    
            const map = await Map.getMap(route);

			if (!Array.isArray(map)) {
				commit(types.SET_MAP_HAS_ERROR, true);
			} else {
				commit(types.SET_MAP_LIST, map);
			}
		} catch (e) {
			commit(types.SET_MAP_HAS_ERROR, true);
		} finally {
			commit(types.SET_LOADING, false);
		}
	},
};
