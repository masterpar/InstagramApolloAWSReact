import React from 'react'
import "./Header.scss"
import {Container, Grid, Image} from "semantic-ui-react"
import Logo from "../../assets/png/2.1 instaclone.png"
import {Link} from "react-router-dom"
import RighHeader from "./RighHeader"



const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Grid>
                    <Grid.Column width={3} className='header__logo'>
                        <Link to='/'>
                        <Image src={Logo} alt='instaclone'/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={10} >
                        <p>Search...</p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <RighHeader/>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default Header
