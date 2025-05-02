import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import type { Movie } from "@/lib/type/types"

interface MovieCardProps {
    movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
    return (
        <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
            <div className="relative aspect-[2/3] w-full">
                <Image src={movie.posterUrl || "/placeholder.svg"} alt={movie.title} fill className="object-fill" priority />
            </div>
            <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{movie.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">
                            {movie.genres}
                        </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{movie.duration} phút</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Khởi chiếu: {movie.releaseDate}</span>
                </div>
            </CardFooter>
        </Card>
    )
}
