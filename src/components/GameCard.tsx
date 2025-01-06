import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
        <h1 className="p-2 text-2xl font-bold opacity-50">{game.name}</h1>
        {/* platform */}
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </div>
    
  );
};

export default GameCard;
