import React from 'react'

import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import GifExpertApp from '../components/GifExpertApp'

describe('Root Component Tests', () => {
  let wrapper = shallow(<GifExpertApp />)

  beforeEach(() => (wrapper = shallow(<GifExpertApp />)))

  test('should show the main component without issues', () => {
    wrapper = shallow(<GifExpertApp />)

    expect(wrapper).toMatchSnapshot()
  })

  test('should return a categories list', () => {
    const categories = ['Saitama', 'Goku']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
