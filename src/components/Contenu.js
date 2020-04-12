import React, { useState } from 'react';
import styled from 'styled-components';
import famille from '../img/famille.jpg';

const Container = styled.article`
    padding: 0 8px;
    position: relative;

    p {
        font-family: 'fira sans';
        text-align: justify;
        line-height: 24px;
    }

    p:nth-child(2) {
        
        a {
            text-decoration: none;
        }
    }

    p:nth-child(4) {
        color: grey;
        font-size: 14px;

        span {
            font-weight: bold;

            a {
                color: black;
                text-decoration: none;
            }
        }
    }

    .transparent {
        position: absolute;
        background: linear-gradient(transparent, #eee);
        width: 100%;
        height: 100%;
        max-height: 160px;
        left: 0;
        bottom: 90px;
        /* top: 300px; */
        /* border: 2px solid red; */
    }
`

const Bouton = styled.button`
    border: 1px solid grey;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    background: #183375;
    padding: 8px 16px;
    width: 120px;
    height: 40px;
    font-family: 'fira sans';
    margin-left: calc(50% - 60px);
`

const Modal = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        text-align: center;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
    }

    img {
        width: 100%;
        max-height: 480px;
    }
`

const Contenu = () => {
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
            <Container>
                <p>
                    Les experts du comité de pilotage à l’initiative de cette plateforme,  dont entre autre Boris Cyrulnik, neuropsychiatre et Richard Delorme, pédopsychiatre, ont alerté la ministre de la famille, Dominique Bertinotti, des dangers liés au confinement.
                </p>
                <p>
                Dans ce contexte particulier, le gouvernement a donc accepté de revoir certaines mesures du confinement, notamment concernant la garde d’enfants. Pour palier à la détresse des parents au bord de la crise de nerfs, le gouvernement demande à ce que tous les grands-parents prennent le relai et garde à temps plein leurs petits-enfants pour une période de 15 jours minimum.
                Toutefois, cette mesure sera applicable seulement après s’être assuré de remplir un certain nombre d’exigences.
                Il faudra tout d’abord remplir un formulaire téléchargeable en ligne sur le site du <a href="https://www.gouvernement.fr/" target="_blank" rel="noopener noreferrer">gouvernement…</a>
                </p>
                <Bouton onClick={() => setOpenModal(true)} >Lire la suite</Bouton>
                <p>Par <span><a href="https://www.europe1.fr/">Europe 1</a></span> avec AFP</p>
                <div className="transparent"/>
                {
                    openModal &&
                    <Modal className="modal" onClick={() => setOpenModal(false)}>
                        <h2>surprise !</h2>
                        <img src={famille} alt="famille"/>
                        <h2>joyeuses pâques !</h2>
                    </Modal>
                }
            </Container>
        </>
    )
}

export default Contenu;