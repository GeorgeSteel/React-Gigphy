import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import GifGrid from '../components/GifGrid'
import useFetchGifs from '../hooks/useFetchGifs'

jest.mock('../hooks/useFetchGifs')

describe('GifGrid Component Tests', () => {
  const category = 'Saitama'

  test('should show the component without issues', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
  })

  test('should show items when the gifs are being loaded by using useFetchGifs', () => {
    const gifs = [
      { id: '123', url: 'https://localhost/any/thing.gif', title: 'anything' },
      {
        id: 'ABC',
        url: 'https://localhost/other/thing.gif',
        title: 'otherthing',
      },
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
