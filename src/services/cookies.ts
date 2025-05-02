"use server";
import { cookies } from "next/headers";
import {AuthResponse} from "@/lib/type/auth";
export async function setUserData(data: AuthResponse) {
    (await cookies()).set("userToken", data.token);
    (await cookies()).set("userId", data.user.id.toString());
    (await cookies()).set("userName", data.user.username);
    (await cookies()).set("avatar", data.user.avatar ? data.user.avatar : "");
    (await cookies()).set("role", data.user.roles);
}

export async function getUserToken() {
    return (await cookies()).get("userToken")?.value;
}

export async function returnUser() {
    return {
        token: (await cookies()).get("userToken")?.value,
        userId: (await cookies()).get("userId")?.value,
        userName: (await cookies()).get("userName")?.value,
        avatar: (await cookies()).get("avatar")?.value,
        role: (await cookies()).get("role")?.value,
    };
}

export async function resetCookie() {
    (await cookies()).delete("userToken");
    (await cookies()).delete("userId");
    (await cookies()).delete("userName");
    (await cookies()).delete("avatar");
    (await cookies()).delete("role");
}
