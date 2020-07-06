// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitForElement, screen, cleanup, waitForDomChange } from '@testing-library/react'
import { ToDoApp } from './ToDoApp'

afterEach(cleanup)

test('submit todo', async () => {
    const { getAllByLabelText, getByTestId, debug } = render(
        <ToDoApp>

        </ToDoApp>
    )
    const addCategory = getAllByLabelText('Fetch TO do')
    const submitCategory = getByTestId('category-button')
    fireEvent.click(submitCategory);
    await waitForDomChange();
    debug();
})

// beforeAll(() => server.listen())

// afterAll(() => server.close())
