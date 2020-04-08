import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo2.jpg';
import mobile from '../img/mobile.png';
import apple from '../img/applestore.png';
import google from '../img/googlestore.png';

const Container = styled.div`
    height: 50px;
    width: 90%;
    margin: 20px auto;
    border-radius: 4px;
    background: #4DADFF;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;

    div:nth-child(1) {
        margin-right: 4px;
        h3 {
            font-size: 16px;
            color: white;
            font-family: 'fira sans';
            margin: 0;
        }
    
        p {
            color: white;
            font-size: 10px;
            font-family: 'fira sans';
            margin: 0;
    
            img {
                height: 16px;
                /* margin-top: 4px; */
            }
        }
    }
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-right: 0;

    img {
        height: 30px;
        width: 24px;
        align-self: center;
    }

    div {
        display: flex;
        align-self: center;

        img {
            height: 16px;
            width: 54px;
            margin: 0 2px;
            justify-content: space-between;
        }
    }
`

const Banniere = () => {
    return(
        <Container>
            <div>
                <h3>Téléchargez</h3>
                <p>la nouvelle application mobile <img src={logo} alt='logo'/></p>
            </div>
            <ImageContainer>
                <img src={mobile} alt="mobile"/>
                <div>
                    <img src={apple} alt="apple"/>
                    <img src={google} alt="google"/>
                </div>
            </ImageContainer>
        </Container>
    )
}

export default Banniere