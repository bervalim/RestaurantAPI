import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export default class Adress {
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
}
