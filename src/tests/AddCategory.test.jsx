import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import AddCategory from '../components/AddCategory'

describe('AddCategory Component Tests', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should show the component without issues', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('input value should change', () => {
    const input = wrapper.find('input')
    const value = 'Hello World'

    input.simulate('change', { target: { value } })

    const p = wrapper.find('p')

    expect(p.text().trim()).toBe(value)
  })

  test('should NOT post the data after submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should call setCategories and clean the input', () => {
    const input = wrapper.find('input')
    const value = 'Hello World'

    input.simulate('change', { target: { value } })

    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(input.prop('value')).toBe('')
  })
})
