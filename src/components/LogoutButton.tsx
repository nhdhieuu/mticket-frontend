"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import {resetCookie} from "@/services/cookies";

export default function LogoutButton() {

    const handleLogout = async () => {
        try {
           await resetCookie();
            console.log("Đã đăng xuất thành công")
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error)
        }
    }

    return (
        <button onClick={handleLogout} className="flex w-full items-center px-2 py-1.5 text-sm">
            <LogOut className="mr-2 h-4 w-4" />
            Đăng xuất
        </button>
    )
}
