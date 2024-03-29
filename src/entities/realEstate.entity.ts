import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entity";
import Category from "./categories.entity";

@Entity('real_estate')
class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: "boolean", default: false })
    sold: boolean

    @Column({ type: "decimal", default: 0, precision: 12, scale: 2 })
    value: number | string

    @Column({ type: "integer" })
    size: number

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string


    @UpdateDateColumn({ type: "date" })
    updatedAt: Date | string


    @ManyToOne(() => Address, address => address.id)
    address: Address

    @ManyToOne(() => Category, category => category.id)
    category: Category

}


export default RealEstate