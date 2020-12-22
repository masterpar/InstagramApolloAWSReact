import React, { useState, useEffect, useMemo } from 'react'
import { ApolloProvider } from '@apollo/client'
import {ToastContainer} from 'react-toastify'
import client from "./config/apollo"
import Auth from "./pages/Auth/Auth"
import {getToken} from "./utils/token"
import AuthContext from "./context/AuthContext"


function App() {

    const [auth, setAuth] = useState(undefined)

    useEffect(() => {
        const token = getToken()
        if(!token){
            setAuth(null)
        } else {
            setAuth(token)
        }
    }, [])

    //Logout
    const logout = () => {
        console.log('close session')
    }

    //SetUser
    const setUser = (user) => {
        setAuth(user)
    }

    //UseMemo
    const authData = useMemo(
        () => ({
            auth,
            logout,
            setUser
        }), [auth]
    )


    return (
      <ApolloProvider client={client}>
            {/*Context*/}
            <AuthContext.Provider value={authData}>
                  {!auth ? <Auth/> : <h1> Estas logeado </h1> }
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
            </AuthContext.Provider>
      </ApolloProvider>
  );
}

export default App;
