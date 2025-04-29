"use client"

import type { Seat } from "@/lib/types"

interface SeatGridProps {
    seats: Seat[]
    onSeatClick: (seat: Seat) => void
}

export function SeatGrid({ seats, onSeatClick }: SeatGridProps) {
    const rows = seats.reduce(
        (acc, seat) => {
            const row = seat.row
            if (!acc[row]) {
                acc[row] = []
            }
            acc[row].push(seat)
            return acc
        },
        {} as Record<string, Seat[]>,
    )

    const sortedRows = Object.keys(rows).sort()

    return (
        <div className="space-y-3">
            {sortedRows.map((row) => (
                <div key={row} className="flex items-center gap-2">
                    <div className="w-6 text-center font-medium">{row}</div>
                    <div className="flex flex-1 gap-2 flex-wrap">
                        {rows[row]
                            .sort((a, b) => a.number - b.number)
                            .map((seat) => (
                                <button
                                    key={seat.id}
                                    className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-colors ${
                                        seat.status === "available"
                                            ? "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                                            : seat.status === "selected"
                                                ? "bg-blue-500 text-white cursor-pointer"
                                                : "bg-gray-500 text-white cursor-not-allowed"
                                    }`}
                                    onClick={() => onSeatClick(seat)}
                                    disabled={seat.status === "booked"}
                                >
                                    {seat.number}
                                </button>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
