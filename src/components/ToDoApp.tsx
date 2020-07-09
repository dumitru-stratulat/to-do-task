import React, { useContext, useRef, useState } from 'react';
import { ToDoModal } from './ToDos/ToDoModal';
import { Context } from '../context/ToDoContext';
import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar/SearchBar'
import { Categories } from './Categories/Categories';
import { ToDos } from './ToDos/ToDos';
import { addToDoInterface } from './interfaces';

export const ToDoApp: React.FC = () => {
    const { addToDo, addCategory, getCategories, getSearchToDos }: any = useContext(Context);
    const [searchInputValue, setsearchInputValue] = useState('')
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(false);
    const addInContext = (
        id: number,
        title: string,
        description: string,
        createdAt: Date,
        updatedAt: Date,
        optionalDescription: string,
        priorityLevel: number,
        categoryId: number
    ) => {
        addToDo(
            id,
            title,
            description,
            createdAt,
            updatedAt,
            optionalDescription,
            priorityLevel,
            categoryId);
    }
    return (
        <div>
            {showModal ? <ToDoModal onAdd={addInContext} handleShowModal={handleShowModal} /> : null}
            <SearchBar />
            <div className="toDoAppContent">
                <Categories />
                <ToDos />
            </div>
            <div className="openModalButton" onClick={() => { setShowModal(true) }}>+</div>
        </div>
    )
}