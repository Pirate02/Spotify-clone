import React, {
    useContext,
    useReducer,
    createContext
} from 'react';


export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);


// to access the datalayer 
export const useDataLayerValue = () => useContext(DataLayerContext);