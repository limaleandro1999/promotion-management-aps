import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Promotion } from "../entity/Promotion";
import { Discount } from "../entity/Discount";

export class PromotionController {
    private promotionRepository = getRepository(Promotion);
    private discountRepository = getRepository(Discount);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.promotionRepository.findAndCount();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.promotionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const promotion = await this.promotionRepository.save({ ...request.body });
        
        if (request.body.discounts) {
            await this.discountRepository.save(request.body.discounts);
        }

        return promotion;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        return this.promotionRepository.update(request.params.id, request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const promotionToRemove = await this.promotionRepository.findOne(request.params.id);
        await this.discountRepository.remove(promotionToRemove.discounts);
        return await this.promotionRepository.remove(promotionToRemove);
    }
}