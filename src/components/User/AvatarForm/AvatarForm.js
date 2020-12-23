import React, { useCallback} from 'react'
import {Button} from "semantic-ui-react"
import './AvatarForm.scss'
import {useDropzone} from "react-dropzone"



const AvatarForm = ({setShowModal}) => {

    //Dropzone
    const onDrop = useCallback( (acceptedFile) => {
        console.log(acceptedFile)
    },[])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg,image/png',
        noKeyboard: true,
        multiple: false
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
