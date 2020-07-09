import React, { useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../../context/ToDoContext'
import { ToDoCard } from './ToDoCard'
import { Categories } from './../Categories/Categories'
import { ToDoInterface } from './../interfaces'

export const ToDos: React.FC = () => {
    const { addCategory, getToDos, getCategories, getSearchToDos, state }: any = useContext(Context)
    let { searchInput } = useParams();

    useEffect(() => {
        if (searchInput) { getSearchToDos(searchInput) };
        getCategories();
    }, [searchInput])

    return (
        <div className="todoCard-wrap">
            {state && state.toDos.map((toDo: ToDoInterface, key: number) => <ToDoCard toDo={toDo} key={key} />)}
        </div>
    )
}