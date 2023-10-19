import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componrnts/SectionTitle";
import {Icon} from "../../../componrnts/icon/Icon";
import {Slider} from "../../../componrnts/slider/Slider";
import {FlexWrapper} from "../../../componrnts/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    let quoteAltRight;
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #f3a4ca;
  min-height: 50vh;
  
  ${IconWrapper}{
    margin: 40px 0 72px;
  }
`