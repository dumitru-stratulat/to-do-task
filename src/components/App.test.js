
import React, { useContext } from 'react'
import { render, fireEvent, waitForElement, screen, cleanup, waitForDomChange, getByTestId } from '@testing-library/react'
import { Context } from '../context/ToDoContext'
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { ToDoAppContent } from './ToDoAppContent';
require("fake-indexeddb/auto");

// const Dexie = require("dexie");
// const indexedDB = require("fake-indexeddb");
// const IDBKeyRange = require("fake-indexeddb/lib/FDBKeyRange");

// const db = new Dexie("MyDatabase", { indexedDB: indexedDB, IDBKeyRange: IDBKeyRange });

function renderWithRouterMatch(
    ui,
    {
        route = "/",
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) {
    return {
        ...render(
            <Router history={history} >
                <Context.Provider value={{ openDB: function openDB() { console.log('smt') }, getCategories: function getCategories() { console.log('ds') } }}>
                    <Route component={ui} />
                </Context.Provider>
            </Router >
        )
    };
}

it("mocks match.params in the test in case your component references match.params.someValueHere", async () => {

    const { getByTestId } = renderWithRouterMatch(ToDoAppContent, {
        route: "/search/huk",
    });
    await waitForDomChange();
    expect(getByTestId('search-input-value')).toHaveTextContent(
        'huk'
    )
});


