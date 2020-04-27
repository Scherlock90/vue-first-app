import { shallowMount } from '@vue/test-utils'
import Cards from '@/components/common/cards/Cards'

function getMountedComponent (Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe('MyComponent', () => {
  it('renders correctly with props', () => {
    expect(
      getMountedComponent(Cards, {
        id: 'card1',
        pathToImage: 'sen.jpg',
        nameImage: 'my-face',
        title: 'something-about-me',
        description: 'something',
        redirect: 'goToGithub'
      }).props()
    ).toEqual({
      id: 'card1',
      pathToImage: 'sen.jpg',
      nameImage: 'my-face',
      title: 'something-about-me',
      description: 'something',
      redirect: 'goToGithub'
    })
  })
})