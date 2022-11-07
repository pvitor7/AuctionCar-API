import {Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne} from "typeorm"
import { Vehicle } from "./Motor";
import { User } from "./User";

@Entity("comment")
class Comment {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    comment: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => Vehicle, vehicle => vehicle.comments,{
        nullable: true
    })
    vehicle: Vehicle

    @ManyToOne(type => User, user => user.comments,{
        nullable: true
    })
    user: User

}

export { Comment }