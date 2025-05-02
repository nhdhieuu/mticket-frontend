import type { Seat } from "@/lib/type/types"

interface SelectedSeatsProps {
    selectedSeats: Seat[]
    ticketPrice: number
}

export function SelectedSeats({ selectedSeats, ticketPrice }: SelectedSeatsProps) {
    const totalPrice = selectedSeats.length * ticketPrice

    return (
        <div className="mt-4">
            <h3 className="font-medium mb-2">Ghế đã chọn:</h3>
            {selectedSeats.length === 0 ? (
                <p className="text-gray-500">Chưa chọn ghế nào</p>
            ) : (
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {selectedSeats
                            .sort((a, b) => {
                                if (a.row !== b.row) {
                                    return a.row.localeCompare(b.row)
                                }
                                return a.number - b.number
                            })
                            .map((seat) => (
                                <div key={seat.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                    {seat.row}
                                    {seat.number}
                                </div>
                            ))}
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                            <span>Giá vé:</span>
                            <span>
                {ticketPrice.toLocaleString()}đ x {selectedSeats.length}
              </span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span>Tổng tiền:</span>
                            <span>{totalPrice.toLocaleString()}đ</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
