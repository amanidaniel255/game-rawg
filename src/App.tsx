import { useState } from "react";
import GameGrid from "./components/GameGrid"
import Genres from "./components/Genres"
import NavBar from "./components/NavBar"
import { Genre } from "./hooks/useGenres";
const App = () => {
  const [genre, setGenre] = useState<Genre | null>(null);

  return (
    <div>
      <NavBar />
      <div className="w-full">

      <div className="flex">
        <div className="flex-none w-1/6">
      <Genres onSelectGenre={(genre)=>setGenre(genre)} selectedGenre={genre}/>

        </div>
        <div className="flex-grow w-full">

      <GameGrid selectedGenre={genre}/>
        </div>

      </div>
      </div>
    </div>
  )
}

export default App