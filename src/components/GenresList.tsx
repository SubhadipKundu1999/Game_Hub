import React from 'react'
import useGenres from '../hooks/useGenres'
function GenresList() {

    const {genres, error} = useGenres();

  return (
<ul>
    {
    genres.map((genre)=> <li key={genre.id}>{genre.name}</li>)}
</ul>
  )
}

export default GenresList
