import GameGrid from "./components/GameGrid"
import Genres from "./components/Genres"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full">

      <div className="flex">
        <div className="flex-none w-1/8">
      <Genres />

        </div>
        <div className="flex-grow w-full">

      <GameGrid />
        </div>

      </div>
      </div>
    </div>
  )
}

export default App