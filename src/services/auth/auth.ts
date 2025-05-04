import axiosInstance from "@/services/axios";
import {AuthResponse} from "@/lib/type/auth";
import {ApiResponse} from "@/lib/type/apiResponse";

interface IAuth{
    username: string;
    password: string;
}
export const login = async (data: IAuth) => {
    try {
        const response = await axiosInstance.post<ApiResponse<AuthResponse>>("auth/login", data);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw new Error("Failed to login");
    }
}

export const register = async (data: IAuth) => {
    try {
        const response = await axiosInstance.post<ApiResponse<AuthResponse>>("auth/user/register", data);
        return response.data;
    } catch (error) {
        console.error("Error registering:", error);
        throw new Error("Failed to register");
    }
}