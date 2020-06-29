import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {
  const [categorie, setCategorie] = useState('')
  const handleChange = e => setCategorie(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()

    if (categorie === '') return null

    setCategories(prevState => [categorie, ...prevState])
    setCategorie('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={categorie} onChange={handleChange} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default AddCategory
