import type {AxiosInstance} from "axios";
import type {Category} from "@/types";
import type {Readable} from "@/services/types";
import {CategoryModel} from "@/models/category.model";

export class CategoriesService implements Readable<Category> {

    constructor(public httpClient: AxiosInstance) {
    }

    /**
     * Get categories
     * @param params
     */
    async get(params: any): Promise<Category[]> {
        const response = await this.httpClient.get<Category[]>('/categories', {params});
        return response.data.map((category) => new CategoryModel(category));
    }

    /**
     * Get category by id
     * @param id
     */
    async getById(id: number): Promise<Category> {
        const response = await this.httpClient.get<Category>('/categories', {params: {id}});
        return new CategoryModel(response.data);
    }
}
