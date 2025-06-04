export type APIError = {
    statusCode: number;
    statusMessage: string;
    message: string;
    data?: Record<string, string>;
};
export type RouterParams = {
    categoryId: string;
    colorId: string;
    productId: string;
    sizeId: string;
};
