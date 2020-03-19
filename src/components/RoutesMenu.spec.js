import { shallowMount } from '@vue/test-utils';

import RoutesMenu from './RoutesMenu.vue';

describe('RoutesMenu', () => {

    const wrapper = shallowMount(RoutesMenu);
    const divs = wrapper.findAll('div')
    const div = divs.at(0)

    it('Should render Router menu with list-group', () => {
        expect(wrapper.find('ul').exists()).toBe(true);
    });
   
});