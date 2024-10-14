export interface Readable<T> {
    get(params: any): Promise<T[]>;

    getById(id: number): Promise<T>;
}

export interface Createable<T> {
    create(data: T): Promise<T>;
}

export interface Updateable<T> {
    update(id: number, data: T): Promise<T>;
}

export interface Deleteable<T> {
    delete(id: number): Promise<T>;
}
