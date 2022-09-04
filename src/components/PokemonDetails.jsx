import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonDetails.css'
import HeaderPoke from './shared/HeaderPoke'

const PokemonDetails = () => {
  const [pokeInfo, setPokeInfo] = useState()
  const {name} = useParams()
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))
  }, [])
  console.log(pokeInfo)
  return (
    <div className='container_det'>
    <HeaderPoke />
    <article className='cardet'>
      <h1 className='cardet__title'>{name.toUpperCase()}</h1>
      <img className='imagen_det' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
    </article>
    </div>
  )
}
export default PokemonDetails