import React from 'react'
import { createContext,useContext,useReducer } from 'react'


// prepare the data layyer on what is to come
export const DataLayerContext = createContext()

export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider  value={useReducer(reducer,initialState)} >
        {children}
        {/* create a reducer */}

    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext)