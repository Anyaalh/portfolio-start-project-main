import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componrnts/SectionTitle";
import {Icon} from "../../../componrnts/icon/Icon";
import {Slider} from "../../../componrnts/slider/Slider";
import {FlexWrapper} from "../../../componrnts/FlexWrapper";

export const Testimony = () => {
    let quoteAltRight;
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: hotpink;
  min-height: 50vh;
`