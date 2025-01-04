import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
 export interface Game{
    id: number;
    name: string;
    background_image: string;
}
interface FetchGamesResponse{
    count: number;
    results: Game[];
}
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games")
        .then(response => {
            setGames(response.data.results);
        })
    }, [])
    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-4 p-8">
           
           {games.map(game => (<GameCard key={game.id} game={game} />))}
        </div>
    )
}


export default GameGrid