import types from './mutations_types';
import mutations from './mutations';

describe('Map Module Mutations', () => {
	let state;

	beforeEach(() => {
		state = {
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
	});

	it('Should update loading state with received information', () => {
		const loading = true;
		const expected = {
			loading: true,
			vehicle: {
				list: null,
				hasError: false,
			},
			map: {
				list: null,
				hasError: false,
			},
		};

		mutations[types.SET_LOADING](state, loading);

		expect(state).toEqual(expected);
		expect(typeof state.loading).toBe('boolean');
	});

	it('Should update vehicle has error state with received information', () => {
		const hasError = true;
		const expected = {
			loading: false,
			vehicle: {
				list: null,
				hasError: true,
			},
			map: {
                list: null,
				hasError: false,
			},
		};

		mutations[types.SET_VEHICLE_HAS_ERROR](state, hasError);

		expect(state).toEqual(expected);
		expect(state.vehicle.hasError).toBe(true);
	});

	it('Should not update the state map has an error', () => {
		const expected = {
            loading: false,
            vehicle: {
				list: null,
				hasError: false,
			},
			map: {
                list: null,
				hasError: true,
			},
		};

		mutations[types.SET_MAP_HAS_ERROR](state, true);

		expect(state).toEqual(expected);
		expect(state.map.hasError).toBe(true);
	});
});
