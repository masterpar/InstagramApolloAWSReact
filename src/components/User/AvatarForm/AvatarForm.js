import React, { useCallback} from 'react'
import {Button} from "semantic-ui-react"
import './AvatarForm.scss'
import {useDropzone} from "react-dropzone"
import {useMutation} from "@apollo/client"
import {UPDATE_AVATAR} from "../../../gql/user"


const AvatarForm = ({setShowModal}) => {

    const [updateAvatar] = useMutation(UPDATE_AVATAR)


    //Dropzone
    const onDrop = useCallback( async (acceptedFile) => {
            const file = acceptedFile[0]

        try{
            const res = await updateAvatar({variables: { file}})
            console.log(res)
        } catch (e) {
            console.log(e)
        }

    },[])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg,image/png',
        noKeyboard: true,
        multiple: false,
        onDrop
    })


    return (
        <div className='avatar-form'>
            <Button {...getRootProps()}> Upload Photo</Button>
            <Button> Delete Photo</Button>
            <Button onClick={ () => setShowModal(false)}>Cancel</Button>
            <input {...getInputProps()}/>
        </div>
    )
}

export default AvatarForm
