import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Vehicle from "./Vehicle";
import User from "./User";

@Entity("offers")
class Offers {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  offer: number;

  @ManyToOne(type => Vehicle, vehicle => vehicle.offers,{
    nullable: true
    })
  vehicle: Vehicle

  @ManyToOne(type => User, user => user.offers,{
    nullable: true })
  user: User

  @CreateDateColumn()
  created_at: Date
}

export default Offers;