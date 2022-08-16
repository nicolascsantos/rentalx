import { Router, Request, Response } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };
