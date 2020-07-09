import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/ToDoContext';
import { ToDoInterface } from './../interfaces';

export const DeleteCardButton: React.FC<{ toDoId: number }> = ({ toDoId }) => {
    const { deleteToDo, state }: any = useContext(Context)
    return (
        <div className="deleteCardButton-wrap" onClick={() => deleteToDo(toDoId)}>
            X
        </div>
    )
}