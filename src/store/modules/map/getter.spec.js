import getter from './getter';

describe('Map Module Getters from store', () => {
	it('Should define vehicles loading state as "error" when vehicles has error', () => {
		const state = {
			loading: false,
			vehicles: {
				hasError: true,
			},
		};

		const result = getter.vehiclesLoadingState(state);

		expect(result).toEqual('error');
	});

	it('Should define vehicles loading state as "loading" when vehicles are loading', () => {
		const state = {
			loading: true,
			vehicles: {
				hasError: false,
			},
		};

		const result = getter.vehiclesLoadingState(state);

		expect(result).toEqual(true);
	});

	it('Should return undefined when loading and error are false', () => {
		const state = {
			loading: false,
			vehicles: {
				hasError: false,
			},
		};

		const result = getter.vehiclesLoadingState(state);

		expect(result).toBe(undefined);
	});

	it('Should define vehicles invalid state as "true" if loading is "true"', () => {
		const state = {
			loading: true,
			vehicles: {
				hasError: false,
			},
		};

		const result = getter.vehiclesLoadingState(state);

		expect(result).toEqual(true);
	});

	it('Should define vehicles invalid state as "true" if vehicles has error is "true"', () => {
		const state = {
			loading: false,
			vehicles: {
				hasError: true,
			},
		};

		const result = getter.vehiclesInvalidState(state);

		expect(result).toEqual(true);
	});

	it('Should define vehicles invalid state as "true" if vehicles has error and loading are "true"', () => {
		const state = {
			loading: true,
			vehicles: {
				hasError: true,
			},
		};

		const result = getter.vehiclesInvalidState(state);

		expect(result).toEqual(true);
	});

	it('Should define vehicles invalid state as "false" if vehicles has error and loading are "false"', () => {
		const state = {
			loading: false,
			vehicles: {
				hasError: false,
			},
		};

		const result = getter.vehiclesInvalidState(state);

		expect(result).toEqual(false);
	});
});
