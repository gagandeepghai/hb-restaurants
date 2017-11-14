
export class RestaurantMenuItem {
    id: number;
    name: String;
    price: number;
    spicelevel: number;
    description: string;
    hasNuts: boolean;
    likes: number;
    thumbsup: boolean = false;
    thumbsdown: boolean = false;
    badges: String[];
}