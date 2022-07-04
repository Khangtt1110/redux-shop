import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '~/redux/actions/productActions';
import ProductComponent from './ProductComponent';
import { Container } from 'semantic-ui-react';

const ProductListing = () => {
    const product = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log('Err', err));
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container>
            <ProductComponent />
        </Container>
    );
};

export default ProductListing;