import {SeatStatus} from "@/lib/type/types";
import {ListApiResponse} from "@/lib/type/apiResponse";

interface ShowtimeSeatResponse {
    id: number,
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
    row: string,
    number: number,
    status: SeatStatus,
    createdAt: string,
    updatedAt: string,
}

const seatResponse : ListApiResponse<ShowtimeSeatResponse> = {
    data: [
        {
            id: 1,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 1,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.612529",
            updatedAt: "2025-05-02T11:41:46.612529"
        },
        {
            id: 2,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 2,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.62164",
            updatedAt: "2025-05-02T11:41:46.62164"
        },
        {
            id: 3,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 3,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.628391",
            updatedAt: "2025-05-02T11:41:46.628391"
        },
        {
            id: 4,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 4,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.636655",
            updatedAt: "2025-05-02T11:41:46.636655"
        },
        {
            id: 5,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 5,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.643187",
            updatedAt: "2025-05-02T11:41:46.643187"
        },
        {
            id: 6,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 6,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.649015",
            updatedAt: "2025-05-02T11:41:46.649015"
        },
        {
            id: 7,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 7,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.654632",
            updatedAt: "2025-05-02T11:41:46.654632"
        },
        {
            id: 8,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 8,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.661845",
            updatedAt: "2025-05-02T11:41:46.661845"
        },
        {
            id: 9,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 9,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.669114",
            updatedAt: "2025-05-02T11:41:46.669114"
        },
        {
            id: 10,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "A",
            number: 10,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.675412",
            updatedAt: "2025-05-02T11:41:46.675412"
        },
        {
            id: 11,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 11,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.682474",
            updatedAt: "2025-05-02T11:41:46.682474"
        },
        {
            id: 12,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 12,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.686899",
            updatedAt: "2025-05-02T11:41:46.686899"
        },
        {
            id: 13,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 13,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.691306",
            updatedAt: "2025-05-02T11:41:46.691306"
        },
        {
            id: 14,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 14,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.695643",
            updatedAt: "2025-05-02T11:41:46.695643"
        },
        {
            id: 15,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 15,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.702872",
            updatedAt: "2025-05-02T11:41:46.702872"
        },
        {
            id: 16,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 16,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.707389",
            updatedAt: "2025-05-02T11:41:46.707389"
        },
        {
            id: 17,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 17,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.711253",
            updatedAt: "2025-05-02T11:41:46.711253"
        },
        {
            id: 18,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 18,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.719292",
            updatedAt: "2025-05-02T11:41:46.719292"
        },
        {
            id: 19,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 19,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.726017",
            updatedAt: "2025-05-02T11:41:46.726017"
        },
        {
            id: 20,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "B",
            number: 20,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.733033",
            updatedAt: "2025-05-02T11:41:46.733033"
        },
        {
            id: 21,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 21,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.739626",
            updatedAt: "2025-05-02T11:41:46.739626"
        },
        {
            id: 22,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 22,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.744993",
            updatedAt: "2025-05-02T11:41:46.744993"
        },
        {
            id: 23,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 23,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.752711",
            updatedAt: "2025-05-02T11:41:46.752711"
        },
        {
            id: 24,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 24,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.756578",
            updatedAt: "2025-05-02T11:41:46.756578"
        },
        {
            id: 25,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 25,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.760551",
            updatedAt: "2025-05-02T11:41:46.760551"
        },
        {
            id: 26,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 26,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.766055",
            updatedAt: "2025-05-02T11:41:46.766055"
        },
        {
            id: 27,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 27,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.770527",
            updatedAt: "2025-05-02T11:41:46.770527"
        },
        {
            id: 28,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 28,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.774389",
            updatedAt: "2025-05-02T11:41:46.774389"
        },
        {
            id: 29,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 29,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.778375",
            updatedAt: "2025-05-02T11:41:46.778375"
        },
        {
            id: 30,
            showtime: {
                id: 1,
                movie: {
                    id: 2,
                    title: "Super Mario 2",
                    description: "Action movie",
                    releaseDate: "2025-05-01",
                    genre: "Action",
                    posterUrl: "https://hehe",
                    duration: 120,
                    createdAt: "2025-05-02T11:30:01.16452",
                    updatedAt: "2025-05-02T11:30:01.16452"
                },
                room: "Room 2",
                price: 140,
                totalSeats: 30,
                date: "2025-03-04",
                time: "15:30",
                createdAt: "2025-05-02T11:41:46.418502",
                updatedAt: "2025-05-02T11:41:46.418502"
            },
            row: "C",
            number: 30,
            status: "AVAILABLE",
            createdAt: "2025-05-02T11:41:46.782405",
            updatedAt: "2025-05-02T11:41:46.782405"
        }
    ],
    message: "Seats retrieved successfully",
    status: 200
}