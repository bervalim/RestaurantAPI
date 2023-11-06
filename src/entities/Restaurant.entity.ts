import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Booking from "./Booking.entity";
import Address from "./Address.entity";
import Category from "./Category.entity";

@Entity("restaurants")
export default class Restaurant {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  michelinStar: boolean;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  priceRange: number | string;

  @Column({ length: 30 })
  meals: string;

  @CreateDateColumn({ type: "date" })
  partnerSince: string;

  @UpdateDateColumn({ type: "date" })
  updateInfo: string;

  @OneToMany(() => Booking, (bookings) => bookings.restaurant)
  bookings: Booking[];

  @OneToOne(() => Address, (addresses) => addresses.restaurant)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (categories) => categories.restaurants)
  category: Category;
}
