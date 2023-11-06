import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
