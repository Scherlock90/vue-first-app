import { shallowMount } from '@vue/test-utils'
import Cards from '@/components/common/cards/Cards'

function getMountedComponent (Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe('Common Cards', () => {
  it('renders correctly with all props and diffrent', () => {
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

    expect(
      getMountedComponent(Cards, {
        id: 'card3',
        pathToImage: 'mark.jpg',
        nameImage: 'your-face',
        title: 'something-about-you',
        description: 'something?',
      }).props()
    ).toEqual({
      id: 'card3',
      pathToImage: 'mark.jpg',
      nameImage: 'your-face',
      title: 'something-about-you',
      description: 'something?',
    })
  })

  it('renders correctly without not required props', () => {
    expect(
      getMountedComponent(Cards, {
        pathToImage: 'sen.jpg',
        nameImage: 'my-face',
        title: 'something-about-me',
        description: 'something',
      }).props()
    ).toEqual({
      pathToImage: 'sen.jpg',
      nameImage: 'my-face',
      title: 'something-about-me',
      description: 'something',
    })

    expect(
      getMountedComponent(Cards, {
        pathToImage: 'mark.jpg',
        nameImage: 'your-face',
        title: 'something-about-you',
        description: 'something?',
      }).props()
    ).toEqual({
      pathToImage: 'mark.jpg',
      nameImage: 'your-face',
      title: 'something-about-you',
      description: 'something?',
    })
  })
})