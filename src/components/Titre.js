import React from 'react'
import styled from 'styled-components'

const Container = styled.article`
    width: 90%;
    margin: 8px auto;
`

const Titre1 = styled.h6`
    margin-bottom: 8px;
`

const Titre2 = styled.h3`
    margin: 0;
    margin-bottom: 16px;
    font-family: 'fira sans';
`

const Titre = () => {
    return(
        <Container>
            <Titre1>ACCUEIL / SANTE</Titre1>
            <Titre2>Coronavirus: Les grands-parents bientôt amené à garder leurs petits enfants ?</Titre2>
        </Container>
    )
}

export default Titre