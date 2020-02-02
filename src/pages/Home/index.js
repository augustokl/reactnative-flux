import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Cart')}>Hello Home</Text>
    </View>
  );
}
