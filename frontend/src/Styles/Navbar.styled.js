import styled from "styled-components";

export const NavbarContainer = styled.div`
    position:fixed;
    width:100%;
    top:0;
    left:0;
    z-index:10;
    transition: all 0.3s ease-in;
    background-color: ${({bgColor})=> bgColor};

`

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({theme}) => theme.fonts.weight.medium};
    color:white;


`