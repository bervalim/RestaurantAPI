import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Restaurant from "./Restaurant.entity";

@Entity("addresses")
export default class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  street: string;

  @Column({ length: 8 })
  ZIP: string;

  @Column({ length: 50 })
  city: string;

  @Column()
  number: number;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 30 })
  neighborhood: string;

  @OneToOne(() => Restaurant, (restaurants) => restaurants.address)
  restaurant: Restaurant;
}
