export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}
export interface ListApiResponse<T> {
    data: T[];
    success: boolean;
    message: string;
}