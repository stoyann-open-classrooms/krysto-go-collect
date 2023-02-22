import React from 'react'

function SearchBar(props) {
  return (
    <div className='form-group search-bar'  >
        <input type="text"  placeholder={props.text} />
    </div>
  )
}

export default SearchBar