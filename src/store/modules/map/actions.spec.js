import actions from './actions';
import types from './mutations_types';

jest.mock('@/services/map', () => ({
	getVehicles: jest.fn(),
	getMap: jest.fn(),
}));

const mockMap = require('@/services/map');

describe('Map Module Actions from store', () => {
    beforeEach(() => {
		mockMap.getVehicles.mockClear();
		mockMap.getMap.mockClear();
    });
    
    it('Should get vehicles and add them to the vehicles List state', async () => {
		const expected = [
			{ label: 'Exemple 1', value: 'ex1' },
			{ label: 'Exemple 2', value: 'ex2' },
		];

		mockMap.getVehicles.mockImplementationOnce(() => Promise.resolve(expected));

		const commit = jest.fn();

		await actions.getVehicles({ commit });

		expect(mockMap.getVehicles).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledTimes(4);
		expect(commit).toHaveBeenNthCalledWith(1, types.SET_LOADING, true);
		expect(commit).toHaveBeenNthCalledWith(2, types.SET_VEHICLE_HAS_ERROR, false);
		expect(commit).toHaveBeenNthCalledWith(3, types.SET_VEHICLE_LIST, expected);
		expect(commit).toHaveBeenNthCalledWith(4, types.SET_LOADING, false);
    });

    it('Should set vehicles has error when the service fails to get vehicles', async () => {
		mockMap.getVehicles.mockImplementationOnce(() => Promise.reject());

		const commit = jest.fn();

		await actions.getVehicles({ commit });

		expect(mockMap.getVehicles).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledTimes(4);
		expect(commit).toHaveBeenNthCalledWith(1, types.SET_LOADING, true);
		expect(commit).toHaveBeenNthCalledWith(2, types.SET_VEHICLE_HAS_ERROR, false);
		expect(commit).toHaveBeenNthCalledWith(3, types.SET_VEHICLE_HAS_ERROR, true);
		expect(commit).toHaveBeenNthCalledWith(4, types.SET_LOADING, false);
    });
    
    it('Should set vehicles has error when the service result has a wrong value', async () => {
		const fakeData = null;
		mockMap.getVehicles.mockImplementationOnce(() => Promise.resolve(fakeData));

		const commit = jest.fn();

		await actions.getVehicles({ commit });

		expect(mockMap.getVehicles).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledTimes(4);
		expect(commit).toHaveBeenNthCalledWith(1, types.SET_LOADING, true);
		expect(commit).toHaveBeenNthCalledWith(2, types.SET_VEHICLE_HAS_ERROR, false);
		expect(commit).toHaveBeenNthCalledWith(3, types.SET_VEHICLE_HAS_ERROR, true);
		expect(commit).toHaveBeenNthCalledWith(4, types.SET_LOADING, false);
	});
    
    it('Should get map and add them to the map List state', async () => {
		const expected = [
			{ label: 'Exemple 1', value: 'ex1' },
			{ label: 'Exemple 2', value: 'ex2' },
		];

		mockMap.getMap.mockImplementationOnce(() => Promise.resolve(expected));

		const commit = jest.fn();

		await actions.getMap({ commit });

		expect(mockMap.getMap).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledTimes(4);
		expect(commit).toHaveBeenNthCalledWith(1, types.SET_LOADING, true);
		expect(commit).toHaveBeenNthCalledWith(2, types.SET_MAP_HAS_ERROR, false);
		expect(commit).toHaveBeenNthCalledWith(3, types.SET_MAP_LIST, expected);
		expect(commit).toHaveBeenNthCalledWith(4, types.SET_LOADING, false);
    });
    
    it('Should set map has error when the service fails to get vehicles', async () => {
		mockMap.getMap.mockImplementationOnce(() => Promise.reject());

		const commit = jest.fn();

		await actions.getMap({ commit });

		expect(mockMap.getMap).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledTimes(4);
		expect(commit).toHaveBeenNthCalledWith(1, types.SET_LOADING, true);
		expect(commit).toHaveBeenNthCalledWith(2, types.SET_MAP_HAS_ERROR, false);
		expect(commit).toHaveBeenNthCalledWith(3, types.SET_MAP_HAS_ERROR, true);
		expect(commit).toHaveBeenNthCalledWith(4, types.SET_LOADING, false);
    });

    it('Should set map has error when the service result has a wrong value', async () => {
		const fakeData = null;
		mockMap.getMap.mockImplementationOnce(() => Promise.resolve(fakeData));

		const commit = jest.fn();

		await actions.getMap({ commit });

		expect(mockMap.getMap).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledTimes(4);
		expect(commit).toHaveBeenNthCalledWith(1, types.SET_LOADING, true);
		expect(commit).toHaveBeenNthCalledWith(2, types.SET_MAP_HAS_ERROR, false);
		expect(commit).toHaveBeenNthCalledWith(3, types.SET_MAP_HAS_ERROR, true);
		expect(commit).toHaveBeenNthCalledWith(4, types.SET_LOADING, false);
	});

 });