import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export default function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    const fetchGifs = async () => {
      const imgs = await getGifs(category)
      setState({
        data: imgs,
        loading: false,
      })
    }

    fetchGifs()
  }, [category])

  return state
}
