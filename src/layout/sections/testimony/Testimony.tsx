import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componrnts/SectionTitle";
import {Icon} from "../../../componrnts/icon/Icon";
import {Slider} from "../../../componrnts/slider/Slider";
import {FlexWrapper} from "../../../componrnts/FlexWrapper";
import {Container} from "../../../componrnts/Container";
import {S} from "../skills/Skills_Styles"

export const Testimony: React.FC = () => {

    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #f3a4ca;
  min-height: 50vh;
  
  ${S.IconWrapper}{
    margin: 40px 0 72px;
  }
  position: relative;
`