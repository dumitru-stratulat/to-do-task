import React, { useRef, useState } from 'react';
import { ToDoModalProps } from './interfaces'
import { useParams } from 'react-router-dom'

export const ToDoModal: React.FC<ToDoModalProps> = ({ onAdd }) => {
    let { categoryId } = useParams();
    //toDos
    const toDoId = Date.now();
    const toDoTitleInput = useRef<HTMLInputElement>(null)
    const descriptionInput = useRef<HTMLInputElement>(null)
    const optionalDescriptionInput = useRef<HTMLInputElement>(null)
    const createdAt = new Date();
    const updatedAt = new Date();
    const priorityLevelInput = useRef<HTMLInputElement>(null)
    const toDoCategoryId = categoryId;

    const addTaskHandler = () => {
        onAdd(
            toDoId,
            toDoTitleInput.current!.value,
            descriptionInput.current!.value,
            createdAt,
            updatedAt,
            optionalDescriptionInput.current!.value,
            priorityLevelInput.current!.valueAsNumber,
            toDoCategoryId
        )
    }
    return (
        <div>
            ToDoModal
            <input ref={toDoTitleInput} type="text" placeholder="Add Title" defaultValue="Title" />
            <input ref={descriptionInput} type="text" placeholder="Add description" defaultValue="Description" />
            <input ref={optionalDescriptionInput} type="text" placeholder="Add optional description" defaultValue="optioal description" />
            <input ref={priorityLevelInput} type="number" placeholder="Add optional description" defaultValue={1} />
            <input type="button" name="Add ToDo" value="Add" onClick={addTaskHandler} />
            <h3>Add category</h3>
        </div>
    )
}