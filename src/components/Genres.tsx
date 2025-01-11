import useGenres, { Genre } from "../hooks/useGenres";
import { BounceLoader } from "react-spinners";

const Genres = () => {
  const {data: genres, error, isloading} = useGenres();
  if (isloading) return <BounceLoader color="gray"/>;
  return (
    <div className="bg-black text-white/50">
      {error && <p className="text-red-500 text-2xl">{error}</p>}
      {genres.map((genre) => (
        <div
          className="flex items-center justify-start text-nowrap gap-3 pb-4"
          key={genre.id}
        >
          <img src={genre.image_background} className="w-fit h-6 object-cover rounded-sm" />
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
