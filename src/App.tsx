import GameGrid from "./components/GameGrid"
import Genres from "./components/Genres"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
      <Genres />
      <GameGrid />

      </div>
    </>
  )
}

export default App