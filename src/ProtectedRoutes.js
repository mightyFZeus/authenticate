import React from "react";
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./components/context/AuthContext";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {currentUser} = useAuth()
    return (
        <Route {...rest} render={(props) => {
            if (currentUser) return <Component {...props} />
            if (!currentUser) return <Redirect to={{ path: "/", state: { from: props.location } }} />
        }}
        />
    )
}

export default ProtectedRoute