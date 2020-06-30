import '@testing-library/jest-dom'

import useFetchGifs from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Tests in useFetchGifs hook', () => {
  const category = 'one punch man'

  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    )
    const { data, loading } = result.current

    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toEqual(true)
  })

  test('should return the fetched gifs and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    )

    await waitForNextUpdate()

    const { data, loading } = result.current

    expect(data.length).toBe(10)
    expect(loading).toEqual(false)
  })
})
