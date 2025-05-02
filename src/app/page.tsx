import Link from "next/link"
import {movies} from "@/lib/data"
import {MovieCard} from "@/components/MovieCard"
import {getMovieList} from "@/services/movies/movieApi";

export default async function HomePage() {
    const response = await getMovieList();
    console.log("response", response.data);
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Rạp Chiếu Phim</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {response.data.map((movie) => (
                    <Link key={movie.id} href={`/movies/${movie.id}`}>
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
