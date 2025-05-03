import {ApiResponse, ListApiResponse} from "@/lib/type/apiResponse";
import {Seat, SeatStatus} from "@/lib/type/types";
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
export interface SeatReservationResult {
    message: string;
    successfulSeats: ReservedSeat[];
    failedSeats: ReservedSeat[];
}

export interface ReservedSeat {
    seatId: number;
    seatNumber: string;
    status: SeatStatus; // Nếu sau này có thêm status khác như "BOOKED", bạn có thể mở rộng kiểu này
}


export interface BookingSeatBody {
    showTimeId: number;
    seatIds: number[];
}
export const bookingSeats = async (body:BookingSeatBody): Promise<ApiResponse<SeatReservationResult>> => {
    try {
        const response = await axiosInstance.post<ApiResponse<SeatReservationResult>>(
            `bookings/book`,
            body,
        )
        return response.data
    } catch (error) {
        console.error("Error booking seats:", error);
        throw new Error("Failed to book seats")
    }
}