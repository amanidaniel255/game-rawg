import useGames from "../hooks/useGames"
import CardSkeleton from "./CardSkeleton"
import GameCard from "./GameCard"
const GameGrid = () => {
    const {games,error,isloading} = useGames();
    const skeletons = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-4 p-8">
           {error && <p className="text-red-500 text-2xl">{error}</p>}
           
          
           {isloading ?  (skeletons.map(() => <CardSkeleton/>)) : games.map(game => (<GameCard key={game.id} game={game}/>))}
        </div>
    )
}


export default GameGrid