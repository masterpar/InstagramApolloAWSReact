import React, { useState } from 'react'
import { Form, Button} from 'semantic-ui-react'
import {useFormik} from "formik"
import {validateFormLoginYup, valuesFormLogin} from "../../../helpers/ValuesValidatesForm"
import {useMutation} from "@apollo/client"
import {LOGIN} from "../../../gql/user"
import {decodeToken, setToken} from "../../../utils/token"
import useAuth from "../../../hooks/useAuth"

const LoginForm = () => {

    //state
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    //gql
    const [login] = useMutation(LOGIN)

    //Context
    const { setUser } = useAuth()


    //formik
    const formik = useFormik({
        initialValues:valuesFormLogin(),
        validationSchema: validateFormLoginYup(),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                const { data } = await login({
                    variables:{
                        input: formData
                    }
                })
                setError('')
                const { token } = data.login
                setToken(token)
                setUser(decodeToken(token))
                setLoading(false)
            }catch (e) {
                setError(e.message)
            }
        }
    })

    return (
        <div className='login-form'>
            <Form className='register-form' onSubmit={formik.handleSubmit}>
                <h2>sign In to see photos and videos</h2>
                <Form.Input
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email && true}
                />

                <Form.Input
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password && true}
                />

                <Button
                    type="submit"
                    className={`btn-submit ${loading && "loading primary"}`}
                 > Sing In
                </Button>
                { error && <p className='submit-error'>{ error }</p>}
            </Form>
        </div>
    )
}

export default LoginForm
