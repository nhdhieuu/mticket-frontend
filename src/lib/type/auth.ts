import {User} from "@/lib/type/user";

export interface AuthResponse {
    token: string;
    user: User
}
