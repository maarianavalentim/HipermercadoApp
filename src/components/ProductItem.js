import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styled from 'styled-components/native';

const ProductItem = ({ product, onPress }) => {
  return (
    <Container>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <Info>
        <Title>{product.name}</Title>
        <Price>{`R$ ${product.price.toFixed(2)}`}</Price>
        <Button title="Ver Detalhes" onPress={onPress} />
      </Info>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Info = styled.View`
  margin-left: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
`;

const Price = styled.Text`
  font-size: 14px;
  color: green;
`;

export default ProductItem;
