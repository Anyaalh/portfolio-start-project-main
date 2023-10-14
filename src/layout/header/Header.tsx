import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componrnts/logo/Logo";
import {Menu} from "../../componrnts/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  background-color: aquamarine;
  display: flex;
  justify-content: space-between;
`