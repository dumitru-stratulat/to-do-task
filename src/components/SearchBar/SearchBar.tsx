import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const SearchBar: React.FC = () => {
    const [searchInputValue, setsearchInputValue] = useState('')

    return (
        <div className="searchBar-wrap">
            <input className="searchBar" type="text" placeholder="searchTextInput" defaultValue='' onChange={(v) => setsearchInputValue(v.target.value)} />
            <Link to={`/search/${searchInputValue}`}>
                <input type="button" value="Search" className="searchBarButton" />
            </Link>
        </div>
    )
}