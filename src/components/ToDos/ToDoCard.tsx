import React, { useEffect, useContext, useRef } from 'react';
import { Context } from '../../context/ToDoContext';
import { ToDoInterface } from '../interfaces';
import { DeleteCardButton } from './DeleteCardButton'

export const ToDoCard: React.FC<{ toDo: ToDoInterface }> = ({ toDo }) => {
    const { editToDo }: any = useContext(Context)
    const toDoId = Date.now();
    const toDoTitleInput = useRef<HTMLInputElement>(null)
    const descriptionInput = useRef<HTMLInputElement>(null)
    const optionalDescriptionInput = useRef<HTMLInputElement>(null)
    const priorityLevelInput = useRef<HTMLInputElement>(null)
    const updatedAt = new Date();
    const oldToDoId = toDo.id; // to make create and delete as edit in indexedDB 

    const editTaskHandler = () => {
        editToDo(
            oldToDoId,
            toDoId,
            toDoTitleInput.current!.value,
            descriptionInput.current!.value,
            toDo.createdAt,
            updatedAt,
            optionalDescriptionInput.current!.value,
            priorityLevelInput,
            toDo.categoryId)
    }
    return (
        <div className="todoCard" >
            <DeleteCardButton toDoId={toDo.id} />
            <input ref={toDoTitleInput} type="text" placeholder="Add Title" value={toDo.title} className="editTaskInput" />
            <input ref={descriptionInput} type="text" placeholder="Add description" value={toDo.description} className="editTaskInput" />
            <input ref={optionalDescriptionInput} type="text" placeholder="Add optional description" value={toDo.optionalDescription} className="editTaskInput" />
            Priority:
            <input ref={priorityLevelInput} type="number" placeholder="Add optional description" value={toDo.priorityLevel} className="editTaskInput" />

            {/* <p>{[toDo.createdAt]}</p> */}
            {/* <p>{toDo.updatedAt}</p> */}
            <p>{toDo.categoryId}</p>
            <input type="button" name="Add ToDo" value="Save" onClick={editTaskHandler} className="cardButton" />
        </div>
    )
}