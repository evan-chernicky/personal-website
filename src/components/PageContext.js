import React, {useState, createContext, useEffect} from 'react'

const PageContext = createContext()

function PageProvider({children}) {
    const [newLocaiton, setNewLocation] = useState(null)
    const [transitionStage, setTransistionStage] = useState("fadeIn")

  
    return (
    <PageContext.Provider value={{setNewLocation, newLocaiton, transitionStage, setTransistionStage}}>{children}</PageContext.Provider>
    )
}

export { PageContext, PageProvider }

