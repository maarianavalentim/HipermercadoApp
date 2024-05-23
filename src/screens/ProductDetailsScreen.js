import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import api from '../api/axiosConfig';
import { addToCart } from '../store/actions/productActions';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <Text>Carregando...</Text>;

  return (
    <Container>
      <ProductImage source={{ uri: product.image }} />
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Price>{`R$ ${product.price.toFixed(2)}`}</Price>
      <StyledButton title="Adicionar ao Carrinho" onPress={() => dispatch(addToCart(product))} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-top: 10px;
`;

const Description = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const Price = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: green;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export default ProductDetailsScreen;
