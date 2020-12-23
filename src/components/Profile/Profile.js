import React, { useState } from 'react'
import {useQuery} from "@apollo/client"
import {GET_USER} from "../../gql/user"
import ImageNoFound from '../../assets/png/2.1 avatar.png'
import './Profile.scss'
import {Grid, Image} from "semantic-ui-react"
import UserNotFound from "../UserNotFound"
import ModalBasic from "../Modal/ModalBasic"
import AvatarForm from "../User/AvatarForm/AvatarForm"
import useAuth from "../../hooks/useAuth"


const Profile = ({ username }) => {

    //state
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState('')
    const [childrenModal, setChildrenModal] = useState(null)

    //hooks
    const {auth} = useAuth()

    //gql
    const { data, loading, error} = useQuery(GET_USER,{
        variables: { username  }
    })
    if(loading) return null
    if(error) return <UserNotFound/>
    const {getUser} = data
    
    //functions
    const hanlderModal = (type) => {
        switch (type) {
            case 'avatar':
                setTitleModal('Change profile picture')
                setChildrenModal( <AvatarForm setShowModal={setShowModal}/> )
                    setShowModal(true)

                break;
            default:
               break
        }
    }

    return (
        <>
            <Grid className='profile'>
                <Grid.Column width={5} className="profile__left">

                    <Image
                        src={ImageNoFound}
                        avatar
                        onClick={ () => username === auth.username && hanlderModal('avatar')}
                    />

                </Grid.Column>

                <Grid.Column width={11} className="profile__right">
                    <div>header Profile</div>
                    <div>Followers</div>
                    <div className='other'>
                        <p className='name'>{ getUser.name}</p>
                        { getUser.website && (
                            <a href={getUser.website} className='website'>
                                { getUser.website}
                            </a>
                        )}
                        { getUser.description && (
                             <p className='description'> { getUser.description} </p>

                        )}

                    </div>
                </Grid.Column>

            </Grid>

            <ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
                { childrenModal }
            </ModalBasic>
        </>
    )
}

export default Profile
