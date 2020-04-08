import React from 'react';
import styled from 'styled-components';

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
`

const Input = styled.input`
    border: 1px solid #eee;
    border-radius: 50px;
    height: 24px;
    background: #eee;
    padding-left: 8px;
`

const Commentaire = () => {
    return(
        <Container>
            <Input placeholder="commenter" />
        </Container>
    )
};

export default Commentaire;