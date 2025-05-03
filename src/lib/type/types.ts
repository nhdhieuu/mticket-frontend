export interface Movie {
    id: number
    title: string
    description: string
    posterUrl: string
    duration: number
    releaseDate: string
    genre: string
    createdAt: string
    updatedAt: string
}

export interface Showtime {
    id: number
    movie: Movie
    date: string
    time: string
    room: string
    price: number
    createdAt: string
    updatedAt: string

}

export type SeatStatus = "AVAILABLE" | "SELECTING" | "SELECTED" | "BOOKED"

export interface Seat {
    id: number
    showtime: {
        id: number,
        movie: {
            id: number,
            title: string,
            description: string,
            releaseDate: string,
            genre: string,
            posterUrl: string,
            duration: number,
            createdAt: string,
            updatedAt: string
        },
        room: string,
        price: number,
        totalSeats: number,
        date: string,
        time: string,
        createdAt: string,
        updatedAt: string
    },
    row: string
    number: number
    status: SeatStatus
    createdAt: string
    updatedAt: string
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
