import Map from '.';

describe('Map services', () => {
	afterEach(() => {
		fetch.resetMocks();
	});

	it('Should call vehicle endpoint without params', async () => {
		fetch.mockResponse(JSON.stringify({ response: '12345' }))
		await Map.getVehicles();

		expect(fetch).toBeCalled()
		expect(fetch).toBeCalledWith('http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni');
	});

	it('Should call vehicle endpoint with params', async () => {
		fetch.mockResponse(JSON.stringify({ response: '12345' }))
		const param = 'exemple';
		await Map.getVehicles(param);

		expect(fetch).toBeCalled()
		expect(fetch).toBeCalledWith('http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=' + param);
	});
});
