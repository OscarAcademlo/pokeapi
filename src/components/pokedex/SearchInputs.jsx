import React from 'react'

const SearchInputs = () => {
  const handleSubmit= e=>{
    e.preventDefault()
    setPokeSearch(e.target.searchText.value(
      
    setOptionType('all')
    ))
  }
  return (
   <form onSubmit={handleSubmit}>
   <input id='searchText' type="text" />
    <button>Search</button>

   </form>
  )
}

export default SearchInputs