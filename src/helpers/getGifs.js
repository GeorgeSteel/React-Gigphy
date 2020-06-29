export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.REACT_APP_API_KEY
  }&q=${encodeURI(category)}&limit=10`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const imgs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }))

  return imgs
}
