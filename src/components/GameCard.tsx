import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    
    
      <div className="border-2 border-gray-500 rounded-lg">
        {/* image */}
        <div >
          <img
            src={game.background_image}
            alt={game.name}
            className="h-48 w-full  object-cover rounded-t-lg"
          />
        </div>
        {/* title */}
        <h1 className="p-2 text-2xl font-bold">{game.name}</h1>
        {/* platform */}
      </div>
    
  );
};

export default GameCard;
