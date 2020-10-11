import React from 'react'

function Search(props) {
  return (
    <section className="main">
    <h2 className="main__title">{props.titulo}</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </section>
  )
}

export default Search;