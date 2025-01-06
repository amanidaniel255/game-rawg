import { Game } from "../hooks/useGames"

interface Props{
    game: Game
}

const CriticScore = ({game}: Props) => {
    // const criticScore = game.metacritic
    console.log(game);
    
  return (
    <div className="w-fit bg-green-400/20 px-2 rounded-md text-xl font-bold ">
      <p className={`${game.metacritic > 70 ? 'text-teal-300' : 'bg-white'}`}>{game.metacritic}</p>
    </div>
  )
}

export default CriticScore