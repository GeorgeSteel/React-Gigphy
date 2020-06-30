import '@testing-library/jest-dom'

import { getGifs } from '../../helpers/getGifs'

describe('Testing fetch function', () => {
  test('should return 10 items', async () => {
    const gifs = await getGifs('Batman')

    expect(gifs.length).toBe(10)
  })

  test('should return 0 items', async () => {
    const gifs = await getGifs('')

    expect(gifs.length).toBe(0)
  })
})
