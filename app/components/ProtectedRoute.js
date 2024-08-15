import { Navigate } from "react-router-dom"

// Prevent access to non-authenticated users
export const ProtectedRoute = ({children, user}) => {
    return user ? children : <Navigate to="/"></Navigate>
}