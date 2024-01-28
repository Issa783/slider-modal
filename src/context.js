import React, { useState, useContext, createContext } from 'react'
const AppContext = createContext()
const AppProvider = ({children}) => {
    const[isSideBarOpen,setIsSideBarOpen] = useState(false)
    const[isModalOpen,setIsModalOpen] = useState(false)
    const OpenSideBar = () => {
        setIsSideBarOpen(true)
    }
    const CloseSideBar = () => {
        setIsSideBarOpen(false)
    }
    const OpenModal = () => {
        setIsModalOpen(true)
    }
    const CloseModal = () => {
        setIsModalOpen(false)
    }
    return <AppContext.Provider value={{isModalOpen,isSideBarOpen,OpenModal,OpenSideBar,CloseModal,CloseSideBar}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext,AppProvider}