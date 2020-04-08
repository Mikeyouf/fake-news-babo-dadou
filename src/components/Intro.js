import React from 'react';
import styled from 'styled-components';

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

    p:nth-child(3) {
        font-weight: bold;
        font-size: 24px;
    }

    p:nth-child(5) {
        color: grey;
        font-size: 14px;

        span {
            font-weight: bold;
            color: black;
        }
    }
`

const Intro = () => {
    return(
        <Container>
            <p>
                Tempor do et cillum nisi in laborum dolor dolore ullamco do. 
                Veniam laborum occaecat veniam laboris consequat. 
                Ullamco sint eu non laborum velit occaecat officia qui 
                ullamco elit in. Fugiat labore dolor ex dolor culpa incididunt 
                dolor Lorem est. Dolore commodo non ad esse adipisicing veniam.
            </p>
            <p>
                Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
                Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
            </p>
            <p>
                "Tempor do et cillum nisi in laborum dolor dolore ullamco do. 
                Veniam laborum occaecat veniam laboris consequat."
            </p>
            <p>
                Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
                Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
                Do labore ullamco mollit excepteur enim ullamco mollit nisi elit occaecat dolore adipisicing. Reprehenderit Lorem et proident laboris amet anim ullamco ea ea amet. Consectetur quis quis qui aliqua veniam officia ea. Laboris qui in amet ea esse ipsum irure et.
            </p>
            <p>Par <span>Europe 1</span> avec AFP</p>
        </Container>
    )
}

export default Intro;