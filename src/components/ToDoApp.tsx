import React, { useContext, useRef } from 'react';
import { ToDoModal } from './ToDoModal';
import { ToDoAppContent } from './ToDoAppContent';
import { Context } from '../context/ToDoContext';

export const ToDoApp: React.FC = () => {
    const { addToDo, addCategory, getCategories }: any = useContext(Context)

    const categoryId = Date.now();
    const categoryTitleInput = useRef<HTMLInputElement>(null)
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
            <ToDoModal onAdd={addInContext} />
            <input ref={categoryTitleInput} type="text" placeholder="categoryTitleInput" defaultValue="categoryTitleInput" />
            <input type="button" name="Fetch TO do" data-testid='category-button' value="Add" onClick={() => { addCategoryInContext() }} />
            <input type="button" name="Fetch TO do" value="Get" onClick={() => { getCategories() }} />
            <ToDoAppContent />
        </div>
    )
}