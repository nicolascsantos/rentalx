import { CategoryRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/* 
[] Definir o tipo de retorno
[x] Alterar o retorno de erro
[] Acessar o repositório
[] Retornar algo
*/

class CreateCategoryService {
    private categoriesRepository: CategoryRepository;

    constructor(categoriesRepository: CategoryRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
