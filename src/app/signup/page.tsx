"use client"

import type React from "react"

import {useState} from "react"
import {Eye, EyeOff, Lock, User} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import { register} from "@/services/auth/auth";
import {setUserData} from "@/services/cookies";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Mật khẩu và nhập lại mật khẩu không khớp.")
            return
        }
        try {
            const response = await register({username, password})
            await setUserData(response.data)
            alert("Đăng ký thành công!")
            window.location.href = "/"
        } catch (e) {
            console.error("Đăng nhập thất bại:", e)
            alert("Đăng ký thất bại")
        }
    }

    return (
        <Card className="w-full shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Đăng ký</CardTitle>
                <CardDescription className="text-center">
                    Nhập thông tin đăng nhập của bạn để tiếp tục
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Tên đăng nhập</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                className="pl-10"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="pl-10 pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Nhập lại mật khẩu</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>
                            <Input
                                id="confirm-password"
                                type={showConfirmPassword ? "text" : "password"}
                                className="pl-10 pr-10"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 mt-3">
                    <Button type="submit" className="w-full">
                        Đăng nhập
                    </Button>
                    <p className="text-center text-sm text-gray-600">
                        Đã có tài khoản?{" "}
                        <a href="#" className="text-primary font-medium hover:underline">
                            Đăng nhập
                        </a>
                    </p>
                </CardFooter>
            </form>
        </Card>
    )
}
