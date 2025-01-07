import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
  
}
const GameCard = ({ game }: GameCardProps) => {
 
  return (
    
    
      <div className="border-[1px] border-neutral-600/60 rounded-lg">
        {/* image */}
        <div>
          <img
            src={game.background_image}
            alt={game.name}
            className="h-48 w-full  object-cover rounded-t-lg"
          />
        </div>
        <div className="p-3">
        {/* title */}
        <h1 className=" text-2xl font-bold opacity-50">{game.name}</h1>
        {/* platform */}
        <div className="flex gap-1 justify-between py-4">

        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        <CriticScore game={game}/>
        </div>
        </div>
      </div>
    
  );
};

export default GameCard;
