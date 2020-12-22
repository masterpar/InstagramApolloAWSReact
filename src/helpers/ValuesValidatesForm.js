import * as Yup from "yup"

export const valuesFormRegister = () => ({
    name: '',
    username: '',
    email: '',
    password:'',
    repeatpassword:''
})

export const valuesFormLogin = () => ({
    email: '',
    password:'',
})

export const validateFormRegisterYup = () => {
   return Yup.object({
        name: Yup.string()
            .required("name required"),
        username: Yup.string()
            .matches(/^[a-zA-Z0-9-]*$/, "Username cannot have space")
            .required('username required'),
        email: Yup.string()
            .email('invalid Email')
            .required('email required'),
        password: Yup.string()
            .required('password required')
            .oneOf([Yup.ref("repeatpassword")],'the passwords are not the same')
            .min(6),
        repeatpassword: Yup.string()
            .required('password required')
            .oneOf([Yup.ref("password")],'the passwords are not the same')
            .min(6)
    })
}

export const validateFormLoginYup = () => {
    return Yup.object({
        email: Yup.string()
            .email('invalid Email')
            .required('email required'),
        password: Yup.string()
            .required('password required')
            .oneOf([Yup.ref("password")],'the passwords are not the same')
            .min(6),

    })
}
