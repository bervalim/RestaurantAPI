import Address from "../entities/Address.entity";
import Category from "../entities/Category.entity";
import Restaurant from "../entities/Restaurant.entity";
import AppError from "../errors/App.error";
import { TcreateRestauranteRequest } from "../interfaces/restaurant.interface";
import { addressRepo, categoryRepo, restaurantRepo } from "../repositories";

export const createRestaurantService = async (
  requestBody: TcreateRestauranteRequest
): Promise<Restaurant> => {
  const category: Category | null = await categoryRepo.findOneBy({
    id: requestBody.categoryId,
  });

  if (!category) throw new AppError("Category not found!", 404);

  const address: Address = await addressRepo.save(requestBody.address);

  const restaurant: Restaurant = await restaurantRepo.save({
    ...requestBody,
    category,
    address,
  });

  return restaurant;
};

export const readAllRestaurantsService = async (): Promise<Restaurant[]> => {
  const restaurants: Restaurant[] = await restaurantRepo.find({
    relations: {
      address: true,
    },
  });
  return restaurants;
};
