import Category from "../entities/Category.entity";
import Restaurant from "../entities/Restaurant.entity";
import { TcreateRestauranteRequest } from "../interfaces/restaurant.interface";

export const createRestaurantService = async (
  requestBody: TcreateRestauranteRequest
): Promise<Restaurant> => {
  const category:Category | null = await 
};
