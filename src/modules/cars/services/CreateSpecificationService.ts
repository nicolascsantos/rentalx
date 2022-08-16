import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    private specificationsReposuitory: ISpecificationRepository;

    constructor(categoriesRepository: ISpecificationRepository) {
        this.specificationsReposuitory = categoriesRepository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsReposuitory.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsReposuitory.create({ name, description });
    }
}

export { CreateSpecificationService };
