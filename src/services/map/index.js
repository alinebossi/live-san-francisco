export default {
    async getVehicles(route = '') {
        if (route) {
            return await fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=' + route)
                .then(response => response.json())
                .then(layer => layer.vehicle);
        }
        return await fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni')
            .then(response => response.json())
            .then(layer => layer.vehicle);
    },
    async getMap(jsonFile = '') {
        return await fetch(jsonFile)
            .then(response => response.json())
            .then(layer => layer.features);
    },
};
