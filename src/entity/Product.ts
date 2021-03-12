import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Discount } from "./Discount";
import { PromoCode } from "./PromoCode";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @ManyToMany(() => PromoCode, promoCode => promoCode.products)
    @JoinTable()
    promoCodes: PromoCode[];

    @ManyToMany(() => Discount, discount => discount.products)
    @JoinTable()
    discounts: Discount[];
}
