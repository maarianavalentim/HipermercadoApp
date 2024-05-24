import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import api from '../api/axiosConfig';
import ProductItem from '../components/ProductItem';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
          />
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export default ProductListScreen;
