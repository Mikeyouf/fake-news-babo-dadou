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

    p:nth-child(1) {
        font-weight: bold;
        font-size: 24px;
    }

    p:nth-child(4) {
        color: grey;
        font-size: 14px;

        span {
            font-weight: bold;
            color: black;
        }
    }

    .transparent {
        position: absolute;
        background: linear-gradient(transparent, #eee);
        width: 100%;
        height: 400px;
        left: 0;
        top: 0;
        /* border-bottom: 1px solid red; */
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
    top: 0;
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
        height: 480px;
        /* margin-top: calc(50% - 240px); */
    }
`

const Contenu = () => {
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
            <Container>
                <p>
                    "Tempor do et cillum nisi in laborum dolor dolore ullamco do. 
                    Veniam laborum occaecat veniam laboris consequat."
                </p>
                <p>
                    Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
                    Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui
                </p>
                <Bouton onClick={() => setOpenModal(true)} >Lire la suite</Bouton>
                <p>Par <span>Europe 1</span> avec AFP</p>
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