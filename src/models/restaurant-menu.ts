import { RestaurantMenuItem } from './restaurant-menu-item'

export class RestaurantMenu {
    id: number;
    menuObject: { [index: string]: RestaurantMenuItem[]} = {};
}