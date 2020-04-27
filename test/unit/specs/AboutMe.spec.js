import Vue from 'vue'
import { mount } from '@vue/test-utils'
import AboutMe from '@/components/about-me/AboutMe'
import Cards from '@/components/common/cards/Cards'

function getMountedComponent (Component, propsData) {
  return mount(Component, {
    propsData
  })
}

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

describe('Mounted Cards in AboutMe', () => {
  const childComponent = getMountedComponent(Cards, {
    id: 'card1',
    pathToImage: 'sen.jpg',
    nameImage: 'my-face',
    title: 'something-about-me',
    description: 'something',
    redirect: 'goToGithub'
  })

  it('should render next component', () => {
    const wrapper = mount(AboutMe, {
      childComponent
    })
    expect(wrapper.find('#first').exists()).toBe(true)
  })
})