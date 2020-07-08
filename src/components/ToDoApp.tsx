import React, { useContext, useRef, useState } from 'react';
import { ToDoModal } from './ToDoModal';
import { ToDoAppContent } from './ToDoAppContent';
import { Context } from '../context/ToDoContext';
import { Link } from 'react-router-dom'

export const ToDoApp: React.FC = () => {
    const { addToDo, addCategory, getCategories, getSearchToDos }: any = useContext(Context);
    const [searchInputValue, setsearchInputValue] = useState('')
    const [showModal, setShowModal] = useState(false);
    const categoryId = Date.now();
    const categoryTitleInput = useRef<HTMLInputElement>(null);
    const categoryToDosId = new Array();
    const categoryCreatedAt = new Date();
    const categoryUpdatedAt = new Date();

    const addInContext = (id: number, title: string, description: string, createdAt: Date, updatedAt: Date, optionalDescription: string, priorityLevel: number, categoryId: number) => {
        addToDo(id, title, description, createdAt, updatedAt, optionalDescription, priorityLevel, categoryId);
    }
    const addCategoryInContext = () => {
        addCategory(categoryId, categoryTitleInput.current!.value, categoryToDosId, categoryCreatedAt, categoryUpdatedAt);
    }
    return (
        <div>
            {showModal ? <ToDoModal onAdd={addInContext} /> : null}
            <button onClick={() => { setShowModal(true) }}>Show Modal</button>
            <input type="text" placeholder="searchTextInput" defaultValue='' onChange={(v) => setsearchInputValue(v.target.value)} />
            <Link to={`/search/${searchInputValue}`}>
                <input type="button" value="Search" />
            </Link>
            {/* <input type="button" value="search" onClick={() => getSearchToDos(searchTextInput.current!.value)} /> */}
            <input ref={categoryTitleInput} type="text" placeholder="categoryTitleInput" defaultValue="categoryTitleInput" />
            <input type="button" name="Fetch TO do" data-testid='category-button' value="Add" onClick={() => { addCategoryInContext() }} />
            <input type="button" name="Fetch TO do" data-testid='category' value="Add" onClick={() => { console.log('started') }} />
            <input type="button" name="Fetch TO do" value="Get" onClick={() => { getCategories() }} />
            <ToDoAppContent />
        </div>
    )
}