import React from 'react';
import styled from 'styled-components'
import logo from '../img/logo.jpg'
import play from '../img/play.png'

const HeaderBanner = styled.header`
  background: #183375;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  img {
    height: 30px;
  }
`

const Burger = styled.div`
  height: 18px;
  width: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 4px;
  }
`

const Play = styled.div`
  width: 120px;
  height: 32px;
  background: #00123F;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 18px;
  }

  p {
    color: white;
    font-family: 'roboto condensed';
    font-weight: bold;
  }
`

const Header = () => {
  return (
    <>
      <HeaderBanner className="App-header">
        <Burger>
          <div/>
          <div/>
          <div/>
        </Burger>
        <img src={logo} alt="logo europe1"/>
        <Play>
          <img src={play} alt="play europe1"/>
          <p>En direct</p>
        </Play>
      </HeaderBanner>
    </>
  );
}

export default Header;