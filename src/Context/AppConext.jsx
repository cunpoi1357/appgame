import { createContext } from 'react'
import { Outlet } from 'react-router-dom'

const AppContext = createContext()
export default AppContext

export function AppProvider() {
    return (
        <AppContext.Provider value={{ data: null }}>
            <Outlet />
        </AppContext.Provider>
    )
}
