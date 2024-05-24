import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/productActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Info>
        <Title>{item.name}</Title>
        <Price>{`R$ ${item.price.toFixed(2)}`}</Price>
      </Info>
      <Button title="Remover" onPress={() => dispatch(removeFromCart(item.id))} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Info = styled.View``;

const Title = styled.Text`
  font-size: 16px;
`;

const Price = styled.Text`
  font-size: 14px;
  color: green;
`;

export default CartItem;
