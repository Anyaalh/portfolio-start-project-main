import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componrnts/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../componrnts/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/prog-1.png"
import timerImg from "./../../../assets/images/proj-2.png"
import {Container} from "../../../componrnts/Container";

const worksIitems = ["All", "landing page", "React", "spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksIitems}/>
            <FlexWrapper justify={"space-between"} align={"flex-start"}>
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
 
`
