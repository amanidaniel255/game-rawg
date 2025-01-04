import { Game } from "./GameGrid";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="bg-black text-white flex flex-col items-center md:flex-row  md:items-end p-8 w-[100%]">
      {/* card  */}
      <div className="border-2 border-gray-500 rounded-lg  w-fit">
        {/* image */}
        <div >
          <img
            src={game.background_image}
            alt={game.name}
            className="h-52 w-52 overflow-hidden object-cover rounded-t-lg"
          />
        </div>
        {/* platform */}
        {/* title */}
        <h1>{game.name}</h1>
      </div>
    </div>
  );
};

export default GameCard;
