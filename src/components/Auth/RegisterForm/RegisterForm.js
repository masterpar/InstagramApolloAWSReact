import React,{ useState } from 'react'
import { Form, Button} from 'semantic-ui-react'
import { useFormik } from 'formik'
import {useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import {REGISTER} from "../../../gql/user"
import './RegisterForm.scss'
import {validateFormRegisterYup, valuesFormRegister} from "../../../helpers/ValuesValidatesForm"


const RegisterForm = ({ setShowLogin }) => {

    const [register] = useMutation(REGISTER)

    const [loading, setLoading] = useState(false)

    //Valid Email
    const formik = useFormik({
        initialValues: valuesFormRegister(),
        //validation YUP
        validationSchema: validateFormRegisterYup(),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                const newUser = formData
                delete newUser.repeatpassword
                console.log(newUser)
                const res = await register({
                    variables: {
                        input:newUser
                    }
                })

                 toast.success('usuario registrado correctamente')
                setShowLogin(true)
                setLoading(false)
            }catch (e) {
                toast.error(e.message)
                console.log(e.message)
            }
        }
    })


    return (
        <>
            <h2 className='register-form-title'>sign up to see photos and videos</h2>
            <Form className='register-form' onSubmit={formik.handleSubmit}>
                <Form.Input
                    type='text'
                    placeholder='Name and last name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name && true}
                />
                <Form.Input
                    type='text'
                    placeholder='name'
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username && true}
                />
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
                <Form.Input
                    type='password'
                    placeholder='repeat password'
                    name='repeatpassword'
                    onChange={formik.handleChange}
                    value={formik.values.repeatpassword}
                    error={formik.errors.repeatpassword && true}
                />
                <Button
                    type="submit"
                    className={`btn-submit ${loading && "loading primary"}`}
                > Sing Up
                </Button>
            </Form>
        </>
    )
}

export default RegisterForm
