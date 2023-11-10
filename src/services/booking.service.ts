import Booking from "../entities/Booking.entity";
import Client from "../entities/Client.entity";
import Restaurant from "../entities/Restaurant.entity";
import AppError from "../errors/App.error";
import { TcreateBookingRequest } from "../interfaces/bookings.interface";
import { bookingRepo, clientRepo, restaurantRepo } from "../repositories";

export const createBookingAtARestaurantService = async (
  requestBody: TcreateBookingRequest,
  clientId: number
): Promise<void> => {
  const newDate = new Date(requestBody.date).getDay();

  if (newDate === 0 || newDate === 6)
    throw new AppError(
      "Invalid date, it is only possible to book from Monday to Friday",
      400
    );

  const hour = Number(requestBody.hour.split(":")[0]);
  if (hour < 8 || hour > 18)
    throw new AppError("Invalid hour,avaible times are 8AM to 18PM", 400);

  const restaurant: Restaurant | null = await restaurantRepo.findOneBy({
    id: requestBody.restaurantId,
  });

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  await bookingRepo.save({
    ...requestBody,
    restaurant: restaurant!,
    client: client!,
  });
};

export const readAllRestaurantBookingsService = async (
  id: number
): Promise<Restaurant> => {
  const restaurant: Restaurant | null = await restaurantRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      bookings: {
        client: true,
      },
      address: true,
      category: true,
    },
  });

  if (!restaurant) throw new AppError("Restaurant not found!", 404);

  return restaurant;
};
