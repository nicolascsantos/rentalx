import { Router, Request, Response } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoryRepository);

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const all = categoryRepository.list();

    return response.json(all);
});

export { categoriesRoutes };
