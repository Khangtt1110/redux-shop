import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeSelectedProduct, selectedProduct } from '~/redux/actions/productActions';
import { Container, Card } from 'semantic-ui-react';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('ERR', err);
        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productId && productId !== '') fetchProductDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    return (
        <Container>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <Card
                    image={product.image}
                    header={product.title}
                    meta={'$' + product.price}
                    description={product.description}
                />
            )}
        </Container>
    );
};

export default ProductDetail;
