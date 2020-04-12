import React from 'react';
import styled from 'styled-components';
import ministre from '../img/bertinotti2.jpg';

const Container = styled.article`
    padding: 0 8px;

    p {
        font-family: 'fira sans';
        text-align: justify;
        line-height: 24px;
    }

    p:nth-child(1) {
        font-weight: bold;
    }
`

const Image = styled.img`
    max-width: 100vw;
`

const Intro = () => {
    return(
        <>
            <Container>
                <p>
                    Suite aux remontée et aux études réalisées par les acteurs de la petite enfance et de la parentalité sur le terrain, il se pourrait que le gouvernement revoie sa copie concernant la garde des enfants par leurs grands-parents.
                </p>
                <p>
                    Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
                    Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
                </p>
            </Container>
            <Image src={ministre} alt="ministre Bertinotti Dominique"/>
        </>
    )
}

export default Intro;