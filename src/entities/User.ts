import { Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm"
import { Vehicle } from "./Motor"

@Entity("users")
@Unique(["email"])
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    celphone: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    initialsName: string

    @Column()
    is_active: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(type => Vehicle, vehicle => vehicle.user, {
        eager: true
    })
    vehicles: Vehicle[]

}

export { User }