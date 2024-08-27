import React from 'react';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
    Container,
}from '../Styles/Global.styled';

import {GiHamburgerMenu}from 'react-icons/gi';
import Theme from '../utils/Theme'
import { Logo, NavbarContainer } from '../Styles/Navbar.styled';
const theme = Theme;
const Navbar = () => {
    return (
        <NavbarContainer bgColor="transparent">
            <PaddingContainer top="1.2rem" bottom="1.2rem">
                <Container>
                    <FlexContainer justify="space-between">
                        <Logo>
                            Logo
                        </Logo>
                    </FlexContainer>
                </Container>
            </PaddingContainer>
        </NavbarContainer>
    );
}

export default Navbar;