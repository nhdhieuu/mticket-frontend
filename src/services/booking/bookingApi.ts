import {ListApiResponse} from "@/lib/type/apiResponse";
import {Seat} from "@/lib/type/types";
import axiosInstance from "@/services/axios";

export const getSeats = async (showtimeId : string) :Promise<ListApiResponse<Seat>> => {
    try {
        const response = await axiosInstance.get<ListApiResponse<Seat>>(
            `seats?showtimeId=${showtimeId}`,
        )
        return response.data
    } catch (error) {
        console.error("Error fetching seats:", error);
        throw new Error("Failed to fetch seats")
    }
}