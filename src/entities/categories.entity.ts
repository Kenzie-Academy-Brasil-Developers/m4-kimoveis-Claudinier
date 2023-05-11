import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entity";

@Entity('categories')
class Category {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:"varchar",length:45})
    name:string
}

export default Category;