import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import Vehicle from "./Vehicle"


@Entity("gallery")
class Gallery {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string
    
    @ManyToOne(type => Vehicle, vehicle => vehicle.photos,{
        nullable: true
    })
    vehicle: Vehicle

}

export default Gallery;