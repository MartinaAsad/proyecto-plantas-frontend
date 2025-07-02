export interface PaginacionResponse<T>{
    content: T[],
    pageNumber: Number
    pageSize: Number
    totalElements: Number
    totalPages: Number
    last: boolean
}