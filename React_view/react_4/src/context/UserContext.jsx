import { createContext } from "react";
import React from 'react'

export const DataContext = createContext();

const UserContext = ( {children} ) => {

    const user = {
        name : "chitra",
        age : 34,
        city : "banaras"
    }

  return (
    <div>
        <DataContext.Provider value = {user}>
    {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
