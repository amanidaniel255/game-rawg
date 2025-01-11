import useGames from "../hooks/useGames"
import { Genre } from "../hooks/useGenres"
import CardSkeleton from "./CardSkeleton"
import GameCard from "./GameCard"
interface Props{
    selectedGenre: Genre | null
}
const GameGrid = ({selectedGenre}: Props) => {
    const {data: games,error,isloading} = useGames(selectedGenre);
    const skeletons = [1,2,3,4,5,6,7,8,9,10]
    console.log(selectedGenre);
    
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-4 p-8">
           {error && <p className="text-red-500 text-2xl">{error}</p>}
           
          
           {isloading ?  (skeletons.map((index) => <CardSkeleton key={index} />)) : games.map(game => (<GameCard key={game.id} game={game}/>))}
        </div>
    )
}


export default GameGrid