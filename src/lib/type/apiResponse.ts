export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}
export interface ListApiResponse<T> {
    data: T[];
    status: number;
    message: string;
}