import type {Category} from "@/types";
import {BaseModel} from "@/models/base.model";

export class CategoryModel extends BaseModel implements Category{
    id: number;
    image: string;
    name: string;

    constructor(data: Category) {
        super(data);
        this.init(data);
    }
}
