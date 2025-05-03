import type { Movie, Showtime, Seat, Booking } from "./type/types"

export const movies: Movie[] = [
    {
        id: 1,
        title: "Avengers: Endgame",
        description:
            "Sau các sự kiện tàn khốc của Avengers: Infinity War, vũ trụ đang trong tình trạng đổ nát. Với sự giúp đỡ của các đồng minh còn lại, các Avengers tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục sự cân bằng cho vũ trụ.",
        posterUrl: "/images/Endgames.jpg",
        duration: 181,
        releaseDate: "24/04/2019",
        genre: "Hành động",
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 2,
        title: "Joker",
        description:
            "Ở Gotham City năm 1981, một diễn viên hài thất bại tên Arthur Fleck bị xã hội bỏ rơi và bị coi thường. Sau đó, anh ta bắt đầu một cuộc nổi dậy bạo lực, trở thành biểu tượng tội phạm khét tiếng Joker.",
        posterUrl: "/images/Joker.jpg",
        duration: 122,
        releaseDate: "04/10/2019",
        genre: "Hành động",
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 3,
        title: "Parasite",
        description:
            "Gia đình Ki-taek thất nghiệp, sống trong một căn hầm bẩn thỉu, cho đến khi con trai của họ bắt đầu dạy kèm cho con gái của gia đình Park giàu có. Dần dần, cả gia đình Ki-taek thâm nhập vào cuộc sống của gia đình Park.",
        posterUrl: "/images/Parasite.jpg",
        duration: 132,
        releaseDate: "30/05/2019",
        genre: "Hành động",
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 4,
        title: "Dune",
        description:
            "Một người thừa kế quý tộc được giao nhiệm vụ bảo vệ hành tinh nguy hiểm nhất trong vũ trụ, nguồn cung cấp loại nguyên liệu quý giá nhất, nơi mà chỉ những người có thể chinh phục nỗi sợ hãi của họ mới có thể tồn tại.",
        posterUrl: "/images/Dune.jpg",
        duration: 155,
        releaseDate: "22/10/2021",
        genre: "Hành động",
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 5,
        title: "Tenet",
        description:
            "Được trang bị chỉ một từ - Tenet - và chiến đấu cho sự sống còn của toàn bộ thế giới, Nhân vật chính hành trình qua một thế giới hoàng hôn của tình báo quốc tế trong một nhiệm vụ sẽ mở ra trong một thứ vượt ra ngoài thời gian thực.",
        posterUrl: "/images/Tenet.jpeg",
        duration: 150,
        releaseDate: "03/09/2020",
        genre: "Hành động",
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 6,
        title: "The Batman",
        description:
            "Khi một kẻ giết người hàng loạt bắt đầu giết các nhân vật chính trị quyền lực ở Gotham, Batman buộc phải điều tra tham nhũng ẩn giấu trong thành phố và đặt câu hỏi về sự liên quan của gia đình anh.",
        posterUrl: "/images/Batman.jpg",
        duration: 176,
        releaseDate: "04/03/2022",
        genre: "Hành động",
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
]

export const showtimes: Showtime[] = [
    {
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
        date: "29/04/2025",
        time: "10:00",
        room: "A1",
        price: 90000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 2,
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
        date: "29/04/2025",
        time: "14:30",
        room: "A1",
        price: 100000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 3,
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
        date: "29/04/2025",
        time: "19:00",
        room: "A2",
        price: 120000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 4,
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
        date: "29/04/2025",
        time: "11:15",
        room: "B1",
        price: 90000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 5,
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
        date: "29/04/2025",
        time: "16:45",
        room: "B1",
        price: 100000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 6,
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
        date: "29/04/2025",
        time: "13:00",
        room: "C1",
        price: 90000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 7,
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
        date: "29/04/2025",
        time: "18:30",
        room: "C1",
        price: 120000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 8,
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
        date: "30/04/2025",
        time: "10:30",
        room: "A1",
        price: 90000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 9,
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
        date: "30/04/2025",
        time: "15:00",
        room: "B1",
        price: 100000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
    {
        id: 10,
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
        date: "30/04/2025",
        time: "19:30",
        room: "A2",
        price: 120000,
        createdAt: "2025-05-02T11:30:01.16452",
        updatedAt: "2025-05-02T11:30:01.16452",
    },
]

const generateSeats = (showtimeId: number): Seat[] => {
    const seats: Seat[] = []
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
    const seatsPerRow = 10

    let id = 1

    rows.forEach((row) => {
        for (let i = 1; i <= seatsPerRow; i++) {
            seats.push({
                id: id++,
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
                row,
                number: i,
                status: Math.random() < 0.2 ? "BOOKED" : "AVAILABLE",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            })
        }
    })
    console.log(seats)
    return seats
}

const seatsData: Record<number, Seat[]> = {}

export const getInitialSeats = (showtimeId: number): Seat[] => {
    if (seatsData[showtimeId]) {
        return seatsData[showtimeId]
    }

    const seats = generateSeats(showtimeId)
    seatsData[showtimeId] = seats
    return seats
}

let bookingsData: Booking[] = [
    {
        id: 1,
        showtimeId: 1,
        movieTitle: "Avengers: Endgame",
        date: "29/04/2025",
        time: "10:00",
        room: "A1",
        seats: ["A1", "A2", "A3"],
        totalPrice: 270000,
    },
    {
        id: 2,
        showtimeId: 5,
        movieTitle: "Joker",
        date: "29/04/2025",
        time: "16:45",
        room: "B1",
        seats: ["D5", "D6"],
        totalPrice: 200000,
    },
]

export const getBookings = (): Booking[] => {
    return bookingsData
}

export const cancelBooking = (bookingId: number): Booking[] => {
    bookingsData = bookingsData.filter((booking) => booking.id !== bookingId)

    return bookingsData
}
