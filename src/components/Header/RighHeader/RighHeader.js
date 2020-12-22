import React from 'react'
import './RighHeader.scss'
import {Icon, Image} from "semantic-ui-react"
import {Link} from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import ImageNoFund  from '../../../assets/png/2.1 avatar.png'

const RighHeader = () => {
    const { auth } = useAuth()

    return (
        <div className='righ-header'>
           <Link to='/'>
               <Icon name="home"/>
           </Link>
            <Icon name='plus'/>
            <Link to={`/${auth.username}`}>
                <Image src={ImageNoFund} avatar/>
            </Link>
        </div>
    )
}

export default RighHeader
