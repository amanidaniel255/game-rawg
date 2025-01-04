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
        <div>
           
           {games.map(game => (<GameCard key={game.id} game={game} />))}
        </div>
    )
}


export default GameGrid