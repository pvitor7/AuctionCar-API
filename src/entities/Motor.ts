import { Column, CreateDateColumn, UpdateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Entity("vehicle")
class Vehicle {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    heading: string

    @Column()
    status: string

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

}

export { Vehicle }