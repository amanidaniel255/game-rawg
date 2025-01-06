import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
const GameGrid = () => {
    const {games,error} = useGames()
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-4 p-8">
           {error && <p className="text-red-500 text-2xl">{error}</p>}
           {games.map(game => (<GameCard key={game.id} game={game} />))}
           
        </div>
    )
}


export default GameGrid