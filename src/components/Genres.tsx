import useGenres, { Genre } from "../hooks/useGenres";
import { BounceLoader } from "react-spinners";
interface Props{
onSelectGenre:(genre: Genre)=>void;
selectedGenre: Genre | null
}
const Genres = ({onSelectGenre, selectedGenre}: Props) => {
  const {data: genres, error, isloading} = useGenres();
  if (isloading) return <BounceLoader color="gray"/>;
  return (
    <div className="bg-black text-white/50">
      {error && <p className="text-red-500 text-2xl">{error}</p>}
      {genres.map((genre) => (
        <button
          key={genre.id}
          className={`flex items-center justify-center  gap-1 pb-2 hover:text-white ${selectedGenre?.id === genre.id ? "font-bold" : "font-normal"}`}
          onClick={() => onSelectGenre(genre)
          }

        >

          <img src={genre.image_background} className=" h-8 w-8 object-cover rounded-sm" />
          <span className="text-md">

          {genre.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Genres;
