import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Discount } from "./Discount";
import { PromoCode } from "./PromoCode";

export enum PromotionType {
    PROMO_CODE = 'PROMO_CODE',
    DISCOUNT = 'DISCOUNT',
}

@Entity()
export class Promotion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    startDate: Date;

    @Column()
    finishDate: Date;

    @Column()
    type: PromotionType;

    @ManyToMany(() => PromoCode, promoCode => promoCode.promotions)
    @JoinTable()
    promoCodes: PromoCode[];

    @OneToMany(() => Discount, discount => discount.promotion)
    discounts: Discount[];
}
