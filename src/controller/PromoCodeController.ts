import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { PromoCode } from "../entity/PromoCode";

export class PromoCodeController {
    private promoCodeRepository = getRepository(PromoCode);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.promoCodeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.promoCodeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.promoCodeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let promoCodeToRemove = await this.promoCodeRepository.findOne(request.params.id);
        await this.promoCodeRepository.remove(promoCodeToRemove);
    }
}