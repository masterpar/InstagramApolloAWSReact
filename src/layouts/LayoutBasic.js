import React from "react"
import {Container} from "semantic-ui-react"
import Header from "../components/Header/Header"



export default function layuoutBasic({children}) {
    return (
        <>
            <Header/>
            <Container className="layout-basic">
                {children}
            </Container>
        </>
    )
}

