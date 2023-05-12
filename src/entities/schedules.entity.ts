import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entity";
import User from "./user.entity";

@Entity('schedules')
class Schedule{

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:"date"})
    date:Date

    @Column({type:"time"})
    hour: Date
    
    @ManyToOne(()=> User, user => user.id)
    user:User

    @ManyToOne(()=> RealEstate, realEstate => realEstate.id)
    realEstate:RealEstate

}


export default Schedule