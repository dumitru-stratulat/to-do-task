import createDataContext from './createDataContext'
import { ToDoInterface, addToDoInterface } from '../components/interfaces'
import { get, getAllToDos, addBook, getCategories as getCategoriesFromIndexedDB, addCategory as addCategoryInIndexedDB, deleteToDo as deleteToDoInIndexedDB } from './utils/indexedDb'

type Actions =
    | { type: 'get_todos'; payload: object }
    | { type: 'get_categories'; payload: object }

interface Todo {
    text: string;
    complete: boolean;
    toDos: any
}

type State = Todo[]

const todoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'get_todos':
            return { ...state, toDos: action.payload }
        case 'get_categories':
            return { ...state, categories: action.payload }
        default:
            return state
    }
}

const addToDo = () => (
    id: number,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    optionalDescription: string,
    priorityLevel: number,
    categoryId: number
) => {

    addBook(
        id,
        title,
        description,
        createdAt,
        updatedAt,
        optionalDescription,
        priorityLevel,
        categoryId);
}
const addCategory = () => (
    categoryId: number,
    categoryTitleInput: string,
    categoryToDosId: Array<number>,
    categoryCreatedAt: Date,
    categoryUpdatedAt: Date
) => {
    addCategoryInIndexedDB(
        categoryId,
        categoryTitleInput,
        categoryToDosId,
        categoryCreatedAt,
        categoryUpdatedAt)
}

const getToDos = (dispatch: ({ type }: { type: string, payload: object }) => void) => async (id: number) => {
    const data = await get(id);
    dispatch({ type: 'get_todos', payload: data })
}
const getSearchToDos = (dispatch: ({ type }: { type: string, payload: object }) => void) =>
    async (searchInputValue: string) => {
        const data = await getAllToDos()
        const searchMatches = await data.filter((toDo: ToDoInterface) => toDo.title.includes(searchInputValue))
        dispatch({ type: 'get_todos', payload: searchMatches })
    }
const editToDo = () => async (
    oldId: number,
    id: number,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    optionalDescription: string,
    priorityLevel: number,
    categoryId: number
) => {
    await addBook(id, title, description, createdAt, updatedAt, optionalDescription, priorityLevel, categoryId)
    await deleteToDoInIndexedDB(oldId)
}
const deleteToDo = () => async (id: number) => {
    deleteToDoInIndexedDB(id)
}
const getCategories = (dispatch: ({ type }: { type: string, payload: object }) => void) => async () => {
    const data = await getCategoriesFromIndexedDB();
    dispatch({ type: 'get_categories', payload: data })
}
export const { Context, Provider } = createDataContext(
    todoReducer, { addToDo, getToDos, addCategory, getCategories, deleteToDo, editToDo, getSearchToDos },
    { toDos: [], categories: [] }
)