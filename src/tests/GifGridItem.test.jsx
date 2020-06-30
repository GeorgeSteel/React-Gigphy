import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import GifGridItem from '../components/GifGridItem'

describe('GifGridItem Component Tests', () => {
  const gif = {
    id: '123',
    url: 'https://',
    title: 'something',
  }
  const wrapper = shallow(<GifGridItem {...gif} />)

  test('should show the component without issues', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have a paragraph with the title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(gif.title)
  })

  test('the image should have an url & alt from the props', () => {
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(gif.url)
    expect(img.prop('alt')).toBe(gif.title)
  })

  test('should have an animate class', () => {
    const div = wrapper.find('div')

    expect(div.prop('className').includes('animate__fadeInDown')).toBe(true)
  })
})
