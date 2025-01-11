import useGenres, { Genre } from "../hooks/useGenres";
import { BounceLoader } from "react-spinners";

const Genres = () => {
  const {data: genres, error, isloading} = useGenres();
  if (isloading) return <BounceLoader color="gray"/>;
  return (
    <div className="bg-black text-white/50">
      {error && <p className="text-red-500 text-2xl">{error}</p>}
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="flex items-center justify-center pt-2"
        >
          <a href="#" className="flex items-center gap-1 justify-center hover:text-white">

          <img src={genre.image_background} className=" h-8 w-8 object-cover rounded-sm" />
          <span className="text-sm">

          {genre.name}
          </span>
          </a>
        </button>
      ))}
    </div>
  );
};

export default Genres;
