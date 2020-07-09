import React, { useContext, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CategoryCard } from './CategoyCard'
import { CategoryInterface } from '../interfaces'
import { Context } from '../../context/ToDoContext'

export const Categories: React.FC = () => {
    const { addCategory, getToDos, getCategories, getSearchToDos, state }: any = useContext(Context)
    const categoryTitleInput = useRef<HTMLInputElement>(null);
    const generatedCategoryId = Date.now();
    let { categoryId } = useParams();
    const categoryCreatedAt = new Date();
    const categoryUpdatedAt = new Date();
    const categoryToDosId = new Array();

    const addCategoryInContext = () => {
        addCategory(
            generatedCategoryId,
            categoryTitleInput.current!.value,
            categoryToDosId,
            categoryCreatedAt,
            categoryUpdatedAt);
    }

    useEffect(() => {
        if (categoryId) { getToDos(categoryId) };
        getCategories();
    }, [categoryId])

    return (
        <div className="categoryCard-wrap">
            {state && state.categories.map((category: CategoryInterface, key: number) => <CategoryCard category={category} key={key} />)}
            <div className="addCategory-wrap">
                <input ref={categoryTitleInput} type="text" placeholder="categoryTitleInput" defaultValue="categoryTitleInput" />
                <input type="button" name="Fetch TO do" data-testid='category-button' value="Add" onClick={() => { addCategoryInContext() }} />
            </div>
        </div>
    )
}