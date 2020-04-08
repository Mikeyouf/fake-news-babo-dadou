import React from 'react';
import styled from 'styled-components';
import { FaRegCommentDots, FaRegThumbsUp, FaWhatsapp } from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Input = styled.input`
    width: 180px;
    border: 1px solid #eee;
    border-radius: 50px;
    height: 24px;
    background: #eee;
    padding-left: 8px;
`

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
    font-size: 20px;
`

const Commentaire = () => {
    return(
        <Container>
            <Input placeholder="commenter" />
            <Div>
                <FaRegThumbsUp/>
                <FaRegCommentDots/>
                <FaWhatsapp/>
            </Div>
        </Container>
    )
};

export default Commentaire;