import React from "react"
import styled from 'styled-components/native';
import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, ShoppingState } from '../redux'
import { ShoppingReducer } from "../redux/reducers/shoppingReducer";

interface HomeProps {
    userReducer: UserState,
    shoppingReducer: ShoppingState,
    onAvailability: Function
}

const _HomeScreen: React.FC<HomeProps> = (props) => {

    const { location } = props.userReducer;
    //const { availability } = props.shoppingReducer

    return (
        <Container>

            <Navigation>
                <Text>Navigation</Text>
            </Navigation>

            <Body>
                <Text>Landing Screen{JSON.stringify(location)}</Text>
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

const mapToStateProps = (state: ApplicationState) => ({
    userReducer: state.userReducer,
    ShoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }