import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState(null)

    const handleRegister = (user) => {
        axios.post('/api/user', user ) 
            .then( res => {
                setUser(res.data.data)
            })
            .catchh( err => {
                console.log(err)
                setErrors({
                    variant: 'danger',
                    msg: err.response.data.errors.full_messages[0]
                })
            })
    }

    const handleLogin = (user) => {
        axios.post('/api/auth/sign_in', user)
            .then( res => {
                setUser(res.data.data)
            })
            .catch( err => {
                console.log(err)
                setErrors({
                    variant: 'danger',
                    msg: err.response.data.errors[0]
                })
            })
    }

    const handleLogout = () => {
        axios.delete('/api/auth/sign_out')
            .then( res => {
                setUser(null)
            })
            .catch( err => {
                console.log(err)
                setErrors({
                    variant: 'danger',
                    msg: err.response.data.errors[0]
                })
            })
    }

    return (
        <AuthContext.Provider value={{
            setUser: (user) => setUser(user),
            handleRegister,
            handleLogin,
            handleLogout,
            authenticated: user !== null,
            errors,
            setErrors
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;