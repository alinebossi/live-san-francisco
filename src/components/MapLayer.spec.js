import { shallowMount } from '@vue/test-utils';

import MapLayer from './MapLayer.vue';

describe('MapLayer', () => {

    const wrapper = shallowMount(MapLayer);

    it('Should render MapLayer with g', () => {
        expect(wrapper.find('g').exists()).toBe(true);
    });
   
});