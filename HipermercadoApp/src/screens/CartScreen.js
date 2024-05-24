import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <TotalContainer>
        <TotalText>Total: R$ {totalAmount.toFixed(2)}</TotalText>
        <Button title="Finalizar Compra" onPress={() => navigation.navigate('Checkout')} />
      </TotalContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const TotalContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const TotalText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default CartScreen;
