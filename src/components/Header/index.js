import React from 'react';
import { Button, Image } from 'react-native';

import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>
        <Image source={logo} />
      </Button>
    </Container>
  );
}
