import type {Category} from "@/types";

export interface CategoryCartProps {
    item?: Category;
}
export interface CategoryWrapperProps {
    items?: Category[];
    loading?: boolean;
}
