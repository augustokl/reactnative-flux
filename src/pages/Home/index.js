import React, { Component } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';

import { Container, ProductList } from './styles';

export default class Home extends Component {
  state = {
    productList: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ productList: response.data });
  }

  render() {
    const { navigation } = this.props;
    const { productList } = this.state;
    return (
      <Container>
        <ProductList>
          <Text onPress={() => navigation.navigate('Cart')}>Hello Home</Text>
        </ProductList>
      </Container>
    );
  }
}
