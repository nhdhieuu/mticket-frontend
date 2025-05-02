export interface Movie {
    id: number
    title: string
    description: string
    posterUrl: string
    duration: number
    releaseDate: string
    genres: string[]
}

export interface Showtime {
    id: number
    movieId: number
    date: string
    time: string
    room: string
    price: number
}

export type SeatStatus = "AVAILABLE" | "SELECTED" | "BOOKED"

export interface Seat {
    id: number
    showtimeId: number
    row: string
    number: number
    status: SeatStatus
}

export interface Booking {
    id: number
    showtimeId: number
    movieTitle: string
    date: string
    time: string
    room: string
    seats: string[]
    totalPrice: number
}
