import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import Map from './Map.vue';
import MapLayer from './MapLayer.vue';
import VehiclesLayer from './VehiclesLayer.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('Map', () => {

    const $t = jest.fn(str => str);

    const wrapper = shallowMount(Map, {
        components: {
            MapLayer,
            VehiclesLayer,
        },
        computed: {
            isLoading: () => true,
            vehiclesError: () => false,
        },
        mocks: {
            $t,
        },
    });

    it('Should render Map with MapLayer', () => {
        const header = wrapper.find(MapLayer);
        expect(header.exists()).toBe(true);
    });

    it('Should render Map with VehiclesLayer', () => {
        const header = wrapper.find(VehiclesLayer);
        expect(header.exists()).toBe(true);
    });

    it('Should render MapLayer with correct props', () => {
        const loading = wrapper.find(MapLayer);

        const layerConfiguration = {
            layerConfiguration: {
                jsonPath: './sfmaps/neighborhoods.json',
                style: {
                    fill: '#FFF',
                    stroke: '#F5BE42',
                },
                projectionConfiguration: {
                    scale: 270000,
                    latitude: 37.775,
                    longitude: -122.4183,
                }
            }
        };

        expect(loading.props()).toMatchObject(layerConfiguration);
    });

});