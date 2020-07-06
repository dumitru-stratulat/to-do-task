import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../context/ToDoContext'
import { ToDoCard } from './ToDoCard'
import { CategoryCard } from './CategoyCard'
import { ToDoInterface, CategoryInterface } from './interfaces'

export const ToDoAppContent: React.FC = () => {
    const { getToDos, getCategories, state }: any = useContext(Context)
    let { categoryId } = useParams();
    useEffect(() => {
        getToDos(categoryId);
        getCategories();
    }, [categoryId])
    return (
        <div className="toDoAppContent">
            <div className="categoryCard-wrap">
                {state.categories.map((category: CategoryInterface, key: number) => <CategoryCard category={category} key={key} />)}
            </div>
            <div className="todoCard-wrap">
                {state.toDos.map((toDo: ToDoInterface, key: number) => <ToDoCard toDo={toDo} key={key} />)}
            </div>
        </div>
    )
}