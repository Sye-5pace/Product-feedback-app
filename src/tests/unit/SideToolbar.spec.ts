import { shallowMount } from '@vue/test-utils';
import SideToolbar from './SideToolbar.vue';

describe('SideToolbar.vue', () => {
  it('renders UI elements and reflects data changes', async () => {
    const wrapper = shallowMount(SideToolbar);

    // Initial assertions (assuming initial store data)
    expect(wrapper.find('[data-test="live-count"]').text()).toBe(wrapper.vm.live.length);
    expect(wrapper.find('[data-test="planned-count"]').text()).toBe(wrapper.vm.planned.length);
    expect(wrapper.find('[data-test="progress-count"]').text()).toBe(wrapper.vm.progress.length);

    wrapper.vm.live.push('New Live Item');
    wrapper.vm.planned.push('New Planned Item');
    wrapper.vm.progress.push('New Progress Item');
    
    await wrapper.vm.$nextTick();

    expect(wrapper.find('[data-test="live-count"]').text()).toBe(wrapper.vm.live.length);
    expect(wrapper.find('[data-test="planned-count"]').text()).toBe(wrapper.vm.planned.length);
    expect(wrapper.find('[data-test="progress-count"]').text()).toBe(wrapper.vm.progress.length);
  });
});
