import { Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./Category";
import Comment from "./Comment";
import Gallery from "./Gallery";
import User from "./User";
import Offers from "./Offers";

@Entity("vehicle")
class Vehicle {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    heading: string

    @Column()
    status: boolean

    @Column()
    year: string

    @Column()
    km: string

    @Column()
    price: string

    @Column()
    description: string

    @Column()
    published: boolean

    @Column()
    img: string

    @Column()
    user_name: string

    @Column()
    user_id: string

    @Column()
    category: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(type => Category, category => category.vehicles,{
        nullable: true
    })
    categorie: Category

    @ManyToOne(type => User, user => user.vehicles,{
        nullable: true
    })
    user: User

    @OneToMany(type => Comment, Comment => Comment.vehicles, {
        eager: true
    })
    comments: Comment[]
    
    @OneToMany(type => Gallery, gallery => gallery.vehicle, {
        eager: true
    })
    photos: Gallery[]
    
    @OneToMany(type => Offers, offer => offer.vehicle, {eager: true})
    offers: Offers[];
}

export default Vehicle;