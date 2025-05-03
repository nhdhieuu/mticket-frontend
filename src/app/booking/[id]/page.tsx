"use client"

import {useState, use, useEffect} from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { showtimes, movies } from "@/lib/data"
import type { Seat } from "@/lib/type/types"
import { Film } from "lucide-react"
import {SeatGrid} from "@/components/SeatGrid";
import {SelectedSeats} from "@/components/SelectedSeat";
import {getSeats} from "@/services/booking/bookingApi";
import LoadingComponent from "@/components/loading";

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = use(params)
    const router = useRouter()
    const showtimeId = Number.parseInt(unwrappedParams.id)
    const showtime = showtimes.find((s) => s.id === showtimeId)
    const [loading, setLoading] = useState(true)
    const [seats, setSeats] = useState<Seat[]>([])
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
    const fetchSeatData = async () => {
        try {
            const response = await getSeats(showtimeId.toString())
            const data = response.data
            console.log("Fetched seat data:", data)
            setSeats(data)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching seat data:", error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSeatData()
    }, [showtimeId])


    if(loading) return <LoadingComponent/>
    if (!showtime) {
        return <div className="container mx-auto py-8">Không tìm thấy suất chiếu</div>
    }

    const movie = movies.find((m) => m.id === showtime.movie.id)

    if (!movie) {
        return <div className="container mx-auto py-8">Không tìm thấy phim</div>
    }

    const handleSeatClick = (seat: Seat) => {
        if (seat.status === "BOOKED") return

        if (seat.status === "SELECTED") {
            setSeats(seats.map((s) => (s.id === seat.id ? { ...s, status: "AVAILABLE" } : s)))
            setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id))
        } else {
            setSeats(seats.map((s) => (s.id === seat.id ? { ...s, status: "SELECTED" } : s)))
            setSelectedSeats([...selectedSeats, seat])
        }
        console.log("Selected seats:", selectedSeats)
    }

    const handleBooking = () => {
        if (selectedSeats.length === 0) return
        const bookingBody ={
            seatIds : selectedSeats.map(seat => seat.id),
            showtimeId: showtimeId,
        }
        console.log("Booking body:", bookingBody)
        /*  setSeats(seats.map((seat) => (selectedSeats.some((s) => s.id === seat.id) ? { ...seat, status: "BOOKED" } : seat)))

        alert(`Đặt vé thành công! Bạn đã đặt ${selectedSeats.length} ghế.`)
        setSelectedSeats([])
        router.push("/bookings")*/
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-2 text-center">{seats[0].showtime.movie.title}</h1>
            <p className="text-center mb-8 text-gray-600">
                {seats[0].showtime.date} | {seats[0].showtime.time} | Phòng {seats[0].showtime.room}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">Chọn ghế</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center mb-6">
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                        <span>Ghế trống</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                                        <span>Đang chọn</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gray-500 rounded"></div>
                                        <span>Đã đặt</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mb-8">
                                <div className="w-full max-w-2xl bg-gray-100 p-4 rounded-lg">
                                    <div className="w-full h-8 bg-gray-300 rounded mb-8 flex items-center justify-center text-sm text-gray-700 font-medium">
                                        MÀN HÌNH
                                    </div>
                                    <SeatGrid seats={seats} onSeatClick={handleSeatClick} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Thông tin đặt vé</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Phim:</h3>
                                    <p>{seats[0].showtime.movie.title}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Suất chiếu:</h3>
                                    <p>
                                        {seats[0].showtime.date} | {seats[0].showtime.time}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Phòng:</h3>
                                    <p>{seats[0].showtime.room}</p>
                                </div>

                                <SelectedSeats selectedSeats={selectedSeats} ticketPrice={showtime.price} />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <Button className="w-full" disabled={selectedSeats.length === 0} onClick={handleBooking}>
                                Đặt vé
                            </Button>
                            <Link href={`/movies/${movie.id}`} className="w-full">
                                <Button variant="outline" className="w-full">
                                    <Film className="mr-2 h-4 w-4" />
                                    Quay lại
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
