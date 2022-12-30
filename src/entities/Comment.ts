import {Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne} from "typeorm"
import Vehicle from "./Vehicle";
import User from "./User";

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

    @Column()
    user_name: string

    @ManyToOne(type => Vehicle, vehicle => vehicle.comments,{
        nullable: true
    })
    vehicles: Vehicle

    @ManyToOne(type => User, user => user.comments,{
        nullable: true
    })
    user: User

}

export default Comment;