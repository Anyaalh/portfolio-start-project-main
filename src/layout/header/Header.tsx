import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componrnts/logo/Logo";
import {Container} from "../../componrnts/Container";
import {FlexWrapper} from "../../componrnts/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
}

const StyledHeader = styled.header`
  background: #1F1F20;
  padding: 20px 0;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 999999;
`
