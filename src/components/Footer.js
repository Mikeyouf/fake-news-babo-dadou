import React from 'react';
import styled from 'styled-components';
import 
    { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaRss, FaRegCopyright } 
from "react-icons/fa";
import logo from '../img/logo.jpg';

const FooterContainer = styled.footer`
    background: #183375;
    width: 100%;
    /* height: 160px; */
    color: white;
    font-family: 'fira sans';
    display: flex;
    flex-wrap: wrap;
`

const Colonne = styled.div`
    width: 40%;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;

    .copy {
        font-weight: 400;
        font-size: 12px;
    }

    img {
        width: 140px;
    }
`

const Colonne2 = styled(Colonne)`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

const Footer = () => {
    return(
        <FooterContainer>
            <Colonne>
                <p>Aide</p>
                <p>CGU</p>
                <p>Charte et cookie</p>
                <p>Mentions légales</p>
            </Colonne>
            <Colonne>
                <p>Annonceurs</p>
                <p>Fréquences</p>
                <p>Références musicales</p>
                <p>Archives sonores</p>
            </Colonne>
            <Colonne2>
                <div>
                    <FaFacebookF/>
                    <p>Facebook</p>
                </div>
                <div>
                    <FaInstagram/>
                    <p>Instagram</p>
                </div>
                <div>
                    <FaTwitter/>
                    <p>Twitter</p>
                </div>
                <div>
                    <FaYoutube/>
                    <p>Youtube</p>
                </div>
                <div>
                    <FaLinkedinIn/>
                    <p>Linkedin</p>
                </div>
                <div>
                    <FaRss/>
                    <p>Flux RSS</p>
                </div>
            </Colonne2>
            <Colonne>
                <img src={logo} alt="logo europe1"/>
                <p className="copy"><FaRegCopyright/> 2020 Europe 1 Digital</p>
            </Colonne>
        </FooterContainer>
    )
};

export default Footer;