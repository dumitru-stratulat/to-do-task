import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../context/ToDoContext'
import { ToDoCard } from './ToDoCard'
import { CategoryCard } from './CategoyCard'
import { ToDoInterface, CategoryInterface } from './interfaces'

export const ToDoAppContent: React.FC = () => {
    const { getToDos, getCategories, getSearchToDos, state }: any = useContext(Context)
    let { categoryId } = useParams();
    let { searchInput } = useParams();

    useEffect(() => {
        if (categoryId) { getToDos(categoryId) };
        if (searchInput) { getSearchToDos(searchInput) };
        getCategories();
    }, [categoryId, searchInput])
    return (
        <div className="toDoAppContent">
            <div className="categoryCard-wrap">
                {state && state.categories.map((category: CategoryInterface, key: number) => <CategoryCard category={category} key={key} />)}
            </div>
            {categoryId && <div>{categoryId}</div>}
            {searchInput && <div data-testid='search-input-value' >{searchInput}</div>}
            {/* <p data-testid='search-input-value' >huk</p> */}
            <div className="todoCard-wrap">
                {state && state.toDos.map((toDo: ToDoInterface, key: number) => <ToDoCard toDo={toDo} key={key} />)}
            </div>
        </div>
    )
}