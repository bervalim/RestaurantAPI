import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Restaurant from "./Restaurant.entity";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @OneToMany(() => Restaurant, (restaurants) => restaurants.category)
  restaurants: Restaurant[];
}
