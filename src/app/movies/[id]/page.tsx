import Link from "next/link"
import Image from "next/image"
import {notFound} from "next/navigation"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Calendar, Clock, Film} from "lucide-react"
import {getMovieById, getMovieShowtimes} from "@/services/movies/movieApi";

export default async function MoviePage({params}: { params: { id: string } }) {
    const movieId = Number.parseInt(params.id)
    const repsponse = await getMovieById(movieId)
    const movie = repsponse.data
    if (!movie) {
        notFound()
    }

    const movieShowtimesResponse = await getMovieShowtimes(movieId)
    console.log("movieShowtimesResponse", movieShowtimesResponse.data)
    const movieShowtimes = movieShowtimesResponse.data

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative aspect-[2/3] w-full max-w-[300px] mx-auto md:mx-0">
                    <Image
                        src={movie.posterUrl || "https://placehold.co/600x400?text=mticket"}
                        alt={movie.title}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">
                            {movie.genre}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-6 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4"/>
                            <span>{movie.duration} phút</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4"/>
                            <span>Khởi chiếu: {movie.releaseDate}</span>
                        </div>
                    </div>
                    <p className="mb-6">{movie.description}</p>

                    <h2 className="text-xl font-bold mb-4">Suất chiếu</h2>
                    {movieShowtimes && movieShowtimes.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {movieShowtimes.map((showtime) => (
                                <Card key={showtime.id} className="border border-gray-200">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="font-semibold">{showtime.date}</div>
                                            <Badge>{showtime.time}</Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-gray-500">
                                                <span className="font-medium">Phòng:</span> {showtime.room}
                                            </div>
                                            <Link href={`/booking/${showtime.id}`}>
                                                <Button size="sm">Đặt vé</Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 mb-6">Hiện chưa có suất chiếu nào cho phim này.</p>
                    )}
                </div>
            </div>
            <div className="mt-8">
                <Link href="/">
                    <Button variant="outline">
                        <Film className="mr-2 h-4 w-4"/>
                        Quay lại danh sách phim
                    </Button>
                </Link>
            </div>
        </div>
    )
}
