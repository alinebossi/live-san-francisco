import { shallowMount } from '@vue/test-utils';

import VehiclesLayer from './VehiclesLayer.vue';

describe('VehiclesLayer', () => {

    const wrapper = shallowMount(VehiclesLayer);

    it('Should render MapLayer with g', () => {
        expect(wrapper.find('g').exists()).toBe(true);
    });
   
});