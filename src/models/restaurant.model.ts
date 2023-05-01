export type IRestaurant = {
    id: number;
    restaurant_name: string;
    location: IPoint;
    address: string;
    average_rating: number;
    review: string;
    cuisine_name: string;
    res_image: string;
}

export interface IPoint {
    x: number;
    y: number;
}