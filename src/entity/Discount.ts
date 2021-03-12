import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Product } from "./Product";
import { Promotion } from "./Promotion";

export enum DiscountType {
    PERCENTAGE = 'PERCENTAGE',
    MONEY = 'MONEY',
}

@Entity()
export class Discount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    type: DiscountType;

    @ManyToMany(() => Product, product => product.discounts)
    @JoinTable()
    products: Product[];

    @ManyToOne(() => Promotion, promotion => promotion.discounts)
    promotion: Promotion;
}
