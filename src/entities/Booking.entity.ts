import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./Client.entity";

@Entity("bookings")
export default class Booking {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @PrimaryGeneratedColumn("uuid")
  bookingCode: string;

  @ManyToOne(() => Client, (clients) => clients.bookings)
  client: Client;
}
