// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {ChevronDown, Film, Ticket, User} from "lucide-react"
import {returnUser} from "@/services/cookies";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import LogoutButton from "@/components/LogoutButton";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Hệ Thống Bán Vé Rạp Chiếu Phim",
    description: "Hệ thống đặt vé xem phim trực tuyến",
}

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode
}>) {
    const user = await returnUser()

    return (
        <html lang="vi">
        <body className={inter.className}>
        <header className="border-b">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <Film className="h-6 w-6" />
                    <span>MTicket</span>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link href="/">
                        <Button variant="ghost">
                            <Film className="mr-2 h-4 w-4" />
                            Phim
                        </Button>
                    </Link>
                    <Link href="/bookings">
                        <Button variant="ghost">
                            <Ticket className="mr-2 h-4 w-4" />
                            Vé đã đặt
                        </Button>
                    </Link>

                    {user?.userName ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{user.userName}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <LogoutButton />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/login">
                            <Button variant="outline">
                                <User className="mr-2 h-4 w-4" />
                                Đăng nhập
                            </Button>
                        </Link>
                    )}
                </nav>
            </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t py-6 mt-12">
            <div className="container mx-auto text-center text-gray-500">
                <p>© 2025 MTicket. Hệ thống bán vé rạp chiếu phim.</p>
            </div>
        </footer>
        </body>
        </html>
    )
}
