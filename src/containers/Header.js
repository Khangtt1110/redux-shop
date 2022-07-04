import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Header = () => {
    return (
        <Menu fixed="top">
            <Container>
                <h2>FakeShop</h2>
            </Container>
        </Menu>
    );
};

export default Header;
