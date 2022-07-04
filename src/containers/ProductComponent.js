import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.product);
    const styleImage = {
        height: '150px',
        padding: '20px',
        backgroundColor: 'transparent',
    };

    return (
        <Grid>
            <Grid.Row centered>
                {products.map((item) => (
                    <Grid.Column key={item.id} computer={4} mobile={8}>
                        <Link to={`/product/${item.id}`}>
                            <Card link>
                                <Image src={item.image} alt={item.title} style={styleImage} />
                                <Card.Content fluid>
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Meta>${item.price}</Card.Meta>
                                    <Card.Description>{item.category}</Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    );
};

export default ProductComponent;
