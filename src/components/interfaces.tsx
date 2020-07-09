
export interface ToDoInterface {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    optionalDescription: string;
    priorityLevel: number;
    categoryId: number;
}
export interface CategoryInterface {
    id: number;
    title: string;
    categoryToDosId: Array<number>;
    createdAt: Date;
    updatedAt: Date;
}
export interface ToDoModalProps {
    onAdd(
        id: number,
        title: string,
        description: string,
        createdAt: Date,
        updatedAt: Date,
        optionalDescription: string,
        priorityLevel: number,
        categoryId: number
    ): void
    handleShowModal(): void
}
export interface addToDoInterface {
    id: number,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    optionalDescription: string,
    priorityLevel: number,
    categoryId: number
}