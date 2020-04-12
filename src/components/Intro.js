import React from 'react';
import styled from 'styled-components';
import ministre from '../img/bertinotti2.jpg';

const Container = styled.article`
    padding: 0 8px;

    p {
        font-family: 'fira sans';
        text-align: justify;
        line-height: 24px;

        a {
            text-decoration: none;
        }
    }

    p:nth-child(1) {
        font-weight: bold;
    }
`

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

const Intro = () => {
    return(
        <>
            <Container>
                <p>
                « Des parents au bord de la crise de nerfs. »
                </p>
                <p>
                Tel était le titre de la chronique de la journaliste Carole Tolila ce 07 avril 2020 pour <a href="https://www.france.tv/france-2/telematin/1368109-telematin.html" target="_blank" rel="noopener noreferrer">Télématin</a>.
                Entre le télé-travail, le rythme soutenu des devoirs à la maison, sans oublier l’intendance…une montée en pression se fait sentir dans les foyers.
                De nombreuses initiatives ont d’ailleurs vu le jour sur internet et les réseaux sociaux pour libérer les parents de cet état de stress.
                Alertée par des messages de parents en détresse, la psychothérapeute et spécialiste de la parentalité positive, <a href="https://www.filliozat.net/" target="_blank" rel="noopener noreferrer">Isabelle Filliozat</a>, a mis en place un numéro vert <a href="tel:+805827827">(0805 827 827)</a>, avec 105 écoutants pour conseiller et prévenir des risques de maltraitance.
                C’est dans cette même démarche qu’une nouvelle plateforme a été créée : <a href="www.enfance-et-Covid.org">enfance et Covid</a>.
                </p>
            </Container>
            <Image src={ministre} alt="ministre Bertinotti Dominique"/>
            <Text>Dominique Bertinotti, ministre de la famille en visite d'un pôle famille avant le confinement</Text>
        </>
    )
}

export default Intro;