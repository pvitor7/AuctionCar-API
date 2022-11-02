import {Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"

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

}

export { Category }