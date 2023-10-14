import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../componrnts/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Anya Alhovka</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-width: 100vh;
  background-color: cornflowerblue;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`
const MainTitle = styled.h1`
    
    `
const Name = styled.h2`
    
    `