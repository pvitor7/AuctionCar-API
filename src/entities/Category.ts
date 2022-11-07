import {Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { Vehicle } from "./Motor";

@Entity("categoty")
class Category {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    categorie: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(type => Vehicle, vehicle => vehicle.categorie, {
        eager: true
    })
    vehicles: Vehicle[]

}

export { Category }