import { mount } from '@vue/test-utils'
import AboutMe from '@/components/about-me/AboutMe'
import Cards from '@/components/common/cards/Cards'

describe('Mounted Cards in AboutMe', () => {
  it('should render cards with props', () => {
    const wrapper = mount(AboutMe)

    expect(wrapper.find(Cards).props()).toStrictEqual({
      "description": "It s me!",
      "id": "first",
      "nameImage": "Sebastian Napora",
      "pathToImage": "",
      "redirect": undefined,
      "title": "Sebastian Napora"
    })
  })
})