import React, { useState, useEffect, useReducer } from "react"
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native';
import * as Location from 'expo-location'

const screenWidth = Dimensions.get('screen').width

const LandingScreen = () => {

    const navigation = useNavigation()
    const [errorMsg, setErrorMsg] = useState('')
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>()
    const [displayAddrress, setDisplayAddress] = useState('Aguardando sua localização...')

    useEffect(() => {

        (async () => {
            // console.log('COORDS: ')
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location: any = await Location.getCurrentPositionAsync({})

            const { coords } = location


            if (coords) {

                const { latitude, longitude } = coords
                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude })
                //console.log('COORDS: ', addressResponse)

                for (let item of addressResponse) {
                    setAddress(item)
                    //console.log('ITEM: ', item)
                    let currentAddress = `${item.subregion}, ${item.region}, ${item.isoCountryCode}`
                    setDisplayAddress(currentAddress)
                    //console.log('ADDRESS: ', currentAddress)

                    if (currentAddress.length > 0) {
                        setTimeout(() => {
                            navigation.navigate('MainTab')
                        }, 2000);
                    }

                    return
                }

            } else {
                //Avise sobre não existir a localização
            }
        })()
    }, [])

    return (
        <Container>

            <Navigation>
            </Navigation>

            <Body>
                <Image source={require('../images/delivery_icon.png')} />
                <Address screen={screenWidth}>
                    <AddressTitle>Diga adeus para a fome!</AddressTitle>
                </Address>

                <AddressText>{displayAddrress}</AddressText>
            </Body>

            <Footer>
            </Footer>

        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: rgba(242,242,242,1);
`;

const Address = styled.View`
    width: ${props => props.screen - 100}px;
    border-bottom-color: red;
    border-bottom-width: 0.5px;
    padding: 5px;
    margin-bottom: 10px;
    align-items: center;
`;

const Navigation = styled.View`
    flex: 2;
`;

const Body = styled.View`
    flex: 9;
    justify-content: center;
    align-items: center;
`;

const Footer = styled.View`
    flex: 1;
`;

const Image = styled.Image`
    width: 120px;
    height: 120px;
`;

const Text = styled.Text`

`;

const AddressTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #7D7D7D;
`;

const AddressText = styled.Text`
    font-size: 16px;
    font-weight: 200;
    color: #AFAFAF;
`;


export default LandingScreen