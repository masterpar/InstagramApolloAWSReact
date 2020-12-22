import React from 'react'
import {useQuery} from "@apollo/client"
import {GET_USER} from "../../gql/user"
import ImageNoFound from '../../assets/png/2.1 avatar.png'
import './Profile.scss'
import {Grid, Image} from "semantic-ui-react"


const Profile = ({ username }) => {

    const { data, loading, error} = useQuery(GET_USER,{
        variables: { username  }
    })
    if(loading) return null
    if(error) return <h2>user not found</h2>
    const {getUser} = data

    return (
        <>
            <Grid className='profile'>
                <Grid.Column width={5} className="profile__left">
                    <Image src={ImageNoFound}  avatar/>
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
        </>
    )
}

export default Profile
