import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../context/ToDoContext';
import { CategoryInterface } from './interfaces';
import '../App.css';

export const CategoryCard: React.FC<{ category: CategoryInterface }> = ({ category }) => {
    return (
        <div className="categoryCard" >
            <Link to={`/category/${category.id}`}>
                <p>{category.title}</p>
                {/* <p>{[category.createdAt]}</p> */}
                <p>Created At:{category.createdAt.toLocaleTimeString('en-US')}</p>
            </Link>
        </div>
    )
}