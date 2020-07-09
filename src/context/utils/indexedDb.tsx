
import { openDB } from 'idb';

let db: any;
init();

export async function init() {
    db = await openDB('ToDoTaskDatabase', 1, {
        upgrade(db) {
            const store = db.createObjectStore('ToDoStore', {
                keyPath: 'id',
            });
            store.createIndex('priorityLevel', 'priorityLevel');
            store.createIndex('categoryId', 'categoryId');
        },
    });
}

async function initCategoryDatabase() {
    db = await openDB('CategoryDatabase', 1, {
        upgrade(db) {
            const store = db.createObjectStore('CategoryStore', {
                keyPath: 'id',
            });
            store.createIndex('createdAt', 'createdAt');
        },
    });
}

export const get = async (id: number) => {
    await init();
    let todo = await db.getAllFromIndex('ToDoStore', 'categoryId', id)
    return todo
}
export const getAllToDos = async () => {
    await init();
    let todo = await db.getAllFromIndex('ToDoStore', 'categoryId')
    return todo
}
export const getCategories = async () => {
    await initCategoryDatabase();
    let categories = await db.getAllFromIndex('CategoryStore', 'createdAt')
    return categories
}

async function clearBooks() {
    let tx = db.transaction('ToDoStore', 'readwrite');
    await tx.objectStore('ToDoStore').clear();
}

export const addBook = async (id: number, title: String, description: String, createdAt: Date, updatedAt: Date, optionalDescription: string, priorityLevel: number, categoryId: number) => {
    await init();
    let tx = db.transaction('ToDoStore', 'readwrite');
    try {
        await tx.objectStore('ToDoStore').put({ //vreau sa scot de aici
            id,
            title,
            description,
            createdAt,
            updatedAt,
            optionalDescription,
            priorityLevel,
            categoryId,
        })
        // await get();
    } catch (err) {
        console.log(err)
    }
}
export const deleteToDo = async (id: number) => {
    await init();
    await db.delete('ToDoStore', id)
}

export const addCategory = async (categoryId: number, categoryTitleInput: string, categoryToDosId: Array<number>, categoryCreatedAt: Date, categoryUpdatedAt: Date) => {
    await initCategoryDatabase();
    let tx = db.transaction('CategoryStore', 'readwrite');
    try {
        await tx.objectStore('CategoryStore').put({
            id: categoryId,
            title: categoryTitleInput,
            categoryToDosId,
            createdAt: categoryCreatedAt,
            updatedAt: categoryUpdatedAt
        })
        // await get();
    } catch (err) {
        console.log(err)
    }
}

