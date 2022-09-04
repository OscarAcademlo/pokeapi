import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import pokemonCard from './components/pokedex/PokemonCard'
import SearchInput from './components/SearchInput'
import SelectType from './components/pokedex/SelectType'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>

        <Route path='/' element={<Home />} />

        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokemonDetails />} />
        </Route>


      </Routes>

    </div>
  )
}

export default App
