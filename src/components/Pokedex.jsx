import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './SearchInput'
import SelectType from './Pokedex/SelectType'
import Pagination from './Pagination'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  const [currentBlock, setCurrentBlock] = useState(1);
  const [page,setPage] = useState(0);

  useEffect(() => {
    if(optionType !== 'All'){
      // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
      // Aquí se hace la lógica cuando el usuario quiere todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=99999999999&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType,page])

  const nameTrainer = useSelector(state => state.nameTrainer)

  return (
    <div>
      <header className='card__header'>
      <h2>Welcome {nameTrainer}, Catch them all.</h2>
      <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType} />
      <SelectType 
        optionType={optionType} 
        setOptionType={setOptionType} 
        setPokeSearch={setPokeSearch}
        setPage={setPage}
        setCurrentBlock={setCurrentBlock}
      />
</header>
      <div className='cards-container'>
                {
          pokemons?.results.slice(page*20,(page+1)*20).map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
        
      </div>
      <Pagination
        pokemons={pokemons}
        setPage={setPage}
        page={page}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />

      
    </div>
    
  )
}

export default Pokedex