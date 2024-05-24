import React from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Bem-vindo ao Hipermercado</Title>
      <StyledButton title="Ver Produtos" onPress={() => navigation.navigate('ProductList')} />
      <StyledButton title="Ver Carrinho" onPress={() => navigation.navigate('Cart')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export default HomeScreen;
