export interface User {
    id: number,
    username: string,
    avatar: string | null,
    roles: Role,
}

export type Role = "USER" | "ADMIN"
