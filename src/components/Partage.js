import React from 'react';
import styled from 'styled-components';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.png';

const Container = styled.div`
    background: white;
    width: 90vw;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    padding: 4px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        color: grey;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        
        img {
            height: 36px;
            width: 36px;
            border: 1px solid #eee;
            padding: 8px;
            margin: 0 4px;
            background: white;
        }
    }

`

const Partage = () => {
    return(
        <Container>
            <h3>Partager sur:</h3>
            <div>
                <a href="https://www.facebook.com/Europe1/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebbok"/>
                </a>
                <a href="https://twitter.com/Europe1" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter"/>
                </a>
            </div>
        </Container>
    )
};

export default Partage;