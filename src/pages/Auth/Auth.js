import React, { useState} from 'react'
import { Container, Image } from "semantic-ui-react"
import RegisterForm from "../../components/Auth/RegisterForm"
import LoginForm from "../../components/Auth/LoginForm"
import instaclone from "../../assets/png/2.1 instaclone.png"
import "./Auth.scss"

const Auth = () => {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <Container fluid className="auth">

            <Image src={instaclone}/>

            <div className="container-form">
                { !showLogin ? <RegisterForm setShowLogin={setShowLogin}/> : <LoginForm/>  }
            </div>

            <div className="change-form">
                <div className='text-buttom' >
                { showLogin ? (
                        <>
                            <p>¿ You do not have an account ?</p>
                            <span onClick={ () => setShowLogin(!showLogin)} > Sing Up</span>
                        </>
                     ) : (
                        <>
                            <p>enter with your account</p>
                            <span onClick={ () => setShowLogin(!showLogin)} > Login</span>
                        </>
                    )
                }
                </div>
            </div>
        </Container>
    )
}

export default Auth

