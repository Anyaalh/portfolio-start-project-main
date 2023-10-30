import React from 'react';
import {SectionTitle} from "../../../componrnts/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../componrnts/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/prog-1.png"
import timerImg from "./../../../assets/images/proj-2.png"
import {Container} from "../../../componrnts/Container";
import {S} from "./Works_Styles"

const worksIitems = ["All", "landing page", "React", "spa"]

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"
    },

]
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksIitems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {workData.map((w) => {
                        return <Work title={w.title}
                                     src={w.src}
                                     text={w.text}/>

                    })}
                    </FlexWrapper>
            </Container>
        </S.Works>
    );
};

