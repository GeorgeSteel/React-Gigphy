import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch Man'])

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(categorie => (
          <GifGrid key={categorie} category={categorie} />
        ))}
      </ol>
    </>
  )
}
