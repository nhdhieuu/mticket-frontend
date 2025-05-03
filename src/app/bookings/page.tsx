"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Trash2 } from "lucide-react"
import { getBookings, cancelBooking } from "@/lib/data"
import type {Booking, Seat} from "@/lib/type/types"
import {BookedSeatResponse, getBookedSeat} from "@/services/booking/bookingApi";
import LoadingComponent from "@/components/loading";
const convertToBookings = (data: BookedSeatResponse[]): Booking[] => {
    return data.map((item): Booking => ({
        id: item.id,
        showtimeId: item.showtime.id,
        movieTitle: item.showtime.movie.title,
        date: item.showtime.date,
        time: item.showtime.time,
        room: item.showtime.room,
        seats: item.seats.map((seat: Seat) => `${seat.row}${seat.number}`),
        totalPrice: item.totalPrice
    }))
}

export default function BookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([])
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try {
            const response = await getBookedSeat();
            const simplifiedBookings: Booking[] = convertToBookings(response.data)
            console.log("simplifiedBookings", simplifiedBookings)
            setBookings(simplifiedBookings)
            setLoading(false)
        }
        catch (e){
            console.log("Error fetching bookings:", e)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleCancelBooking = (bookingId: number) => {
        if (confirm("Bạn có chắc chắn muốn hủy đặt vé này không?")) {
            const updatedBookings = cancelBooking(bookingId)
            setBookings(updatedBookings)
        }
    }
    if (loading){
        return <LoadingComponent/>
    }
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Vé đã đặt</h1>

            {bookings.length === 0 ? (
                <div className="text-center">
                    <p className="mb-4">Bạn chưa đặt vé nào.</p>
                    <Link href="/">
                        <Button>
                            <Film className="mr-2 h-4 w-4" />
                            Xem danh sách phim
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookings.map((booking) => (
                        <Card key={booking.id}>
                            <CardHeader>
                                <CardTitle>{booking.movieTitle}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Suất chiếu:</span>
                                        <span>
                      {booking.date} | {booking.time}
                    </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Phòng:</span>
                                        <span>{booking.room}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Ghế:</span>
                                        <span>{booking.seats.join(", ")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Tổng tiền:</span>
                                        <span className="font-bold">{booking.totalPrice.toLocaleString()}đ</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="destructive" className="w-full" onClick={() => handleCancelBooking(booking.id)}>
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Hủy đặt vé
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}

            <div className="mt-8 text-center">
                <Link href="/">
                    <Button variant="outline">
                        <Film className="mr-2 h-4 w-4" />
                        Quay lại danh sách phim
                    </Button>
                </Link>
            </div>
        </div>
    )
}
