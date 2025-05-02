import { ListApiResponse} from "@/lib/type/apiResponse";
import axiosInstance from "@/services/axios";

interface MovieApiResponse {
    id: number
    title: string
    description: string
    posterUrl: string
    duration: number
    releaseDate: string
    genres: string[]
    createdAt: string
    updatedAt: string
}

export const getMovieList = async (): Promise<ListApiResponse<MovieApiResponse[]>> => {
    try {
        const response = await axiosInstance.get<ListApiResponse<MovieApiResponse[]>>(
            "movies",
        )
        console.log("response", response)
        return response.data
    } catch (error) {
        console.error("Error fetching movie list:", error);
        throw new Error("Failed to fetch movie list")
    }
}