import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  //focus for the input when the app renders
  useEffect(() => {
    searchValue.current.focus()
  }, []);

  //to prevent default
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form action="" className='search-form' onSubmit={() => handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
          type="text" 
          id='name' 
          ref={searchValue}
          onChange={() => searchCocktail()}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
