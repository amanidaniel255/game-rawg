import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const Genres = () => {
  const {data: genres, error, isloading} = useGenres();
  return (
    <div className="bg-black text-white/50 w-[30%]">
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
