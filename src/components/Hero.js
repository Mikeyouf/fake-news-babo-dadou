import React from 'react'
import styled from 'styled-components'
import grandsparents from '../img/grandsparents.jpeg'

const Image = styled.img`
    max-width: 100vw;
`
const Text = styled.p`
    color: grey;
    margin-top: 0;
    font-size: 12px;
    font-family: 'fira sans';
    text-align: center;
`

const Hero = () => {
    return(
        <>
            <Image src={grandsparents} alt="grands parents école maison"/>
            <Text>Un grand père qui s'occupe de ses petits enfants</Text>
        </>
    )
}

export default Hero