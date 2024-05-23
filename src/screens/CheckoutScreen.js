import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const CheckoutScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>Checkout</Text>
      <Button title="Confirmar Compra" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default CheckoutScreen;
