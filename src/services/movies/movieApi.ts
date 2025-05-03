import {ApiResponse, ListApiResponse} from "@/lib/type/apiResponse";
import axiosInstance from "@/services/axios";
import {Movie, Showtime} from "@/lib/type/types";

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

export const getMovieList = async (): Promise<ListApiResponse<Movie>> => {
    try {
        const response = await axiosInstance.get<ListApiResponse<Movie>>(
            "movies",
        )
        console.log("response", response)
        return response.data
    } catch (error) {
        console.error("Error fetching movie list:", error);
        throw new Error("Failed to fetch movie list")
    }
}
export const getMovieById = async (id: number): Promise<ApiResponse<Movie>> => {
    try {
        const response = await axiosInstance.get<ApiResponse<Movie>>(
            `movies/${id}`,
        )
        return response.data
    } catch (error) {
        console.error("Error fetching movie by ID:", error);
        throw new Error("Failed to fetch movie by ID")
    }
}
export const getMovieShowtimes = async (id: number): Promise<ListApiResponse<Showtime>> => {
    try {
        const response = await axiosInstance.get<ListApiResponse<Showtime>>(
            `showtimes?movieId=${id}`,
        )
        return response.data
    } catch (error) {
        console.error("Error fetching movie showtimes:", error);
        throw new Error("Failed to fetch movie showtimes")
    }

}