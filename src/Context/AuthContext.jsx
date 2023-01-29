import { createContext } from 'react'
import { Outlet } from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext

export function AuthProvider() {
    return (
        <AuthContext.Provider value={{ user: null }}>
            <Outlet />
        </AuthContext.Provider>
    )
}
