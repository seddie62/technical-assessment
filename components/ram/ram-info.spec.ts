import { describe, expect, it, vi } from 'vitest'
import { RouterLinkStub, mount } from '@vue/test-utils'
import RamInfo from './ram-info.vue'

// Mock the NuxtImg component
vi.mock('#components', () => ({
  NuxtImg: {
    template: '<img :src="src" />',
    props: ['src'],
  },
}))

// // Mock the UButton component
const UButton = {
  name: 'UButton',
  template: '<router-link :to="to"><slot /></router-link>', // Make UButton behave like a router link
  props: ['to'],
}

describe('ram Info Card', () => {
  const mockData = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  }

  const mountComponent = (props: { data: RickAndMorty | null }) => {
    return mount(RamInfo, {
      props,
      global: {
        stubs: {
          Icon: true,
          UButton,
          NuxtLink: RouterLinkStub,
        },
        mocks: {
          $route: { params: { id: '1' } }, // Mocking $route
        },
      },
    })
  }

  it('renders correctly with data', () => {
    const wrapper = mountComponent({ data: mockData })

    expect(wrapper.text()).toContain('Rick Sanchez')
    expect(wrapper.text()).toContain('Species: Human')
    expect(wrapper.find('img').attributes('src')).toBe(mockData.image)
  })

  it('renders loading state when no data is provided', () => {
    const wrapper = mountComponent({ data: null })

    expect(wrapper.text()).toContain('...')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('disables the "Read more" button when no data is provided', () => {
    const wrapper = mountComponent({ data: null })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(false) // Ensure no button exists when data is null
  })

  it('enables the "Read more" button when data is provided', () => {
    const wrapper = mountComponent({ data: mockData })

    const button = wrapper.find('a')

    expect(button.exists()).toBe(true) // Ensure the button exists
    expect(button.attributes('disabled')).toBeUndefined() // Ensure it's not disabled
  })
})
