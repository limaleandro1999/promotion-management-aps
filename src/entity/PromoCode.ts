import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Product } from "./Product";
import { Promotion } from "./Promotion";

export enum DiscountType {
    PERCENTAGE = 'PERCENTAGE',
    MONEY = 'MONEY',
}

@Entity()
export class PromoCode {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    value: number;

    @Column()
    type: DiscountType;

    @ManyToMany(() => Product, product => product.promoCodes)
    @JoinTable()
    products: Product[];

    @ManyToMany(() => Promotion, promotion => promotion.promoCodes)
    @JoinTable()
    promotions: Promotion[];
}
