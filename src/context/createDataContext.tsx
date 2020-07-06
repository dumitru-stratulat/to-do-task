
import React, { useReducer } from 'react'

interface ProviderProps {
    children: Object
}

//export default (reducer: () => { [key: string]: string }, actions: any, defaultValue: Object) => {

export default (reducer: any, actions: any, defaultValue: object) => {
    const Context = React.createContext(undefined);

    const Provider: React.FC<ProviderProps> = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        const boundActions = Object();
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}