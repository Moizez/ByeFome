import React from "react"
import styled from 'styled-components/native';

const HomeScreen = () => {
    return (
        <Container>

            <Navigation>
                <Text>Navigation</Text>
            </Navigation>

            <Body>
                <Text>Landing Screen</Text>
            </Body>

            <Footer>
                <Text>Footer</Text>
            </Footer>

        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: green;
`;

const Navigation = styled.View`
    flex: 2;
    background-color: red;
`;

const Body = styled.View`
    flex: 9;
    justify-content: center;
    align-items: center;
    background-color: yellow;
`;

const Footer = styled.View`
    flex: 1;
    background-color: cyan;
`;

const Text = styled.Text`

`;

export default HomeScreen