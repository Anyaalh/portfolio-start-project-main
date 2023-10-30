import React from 'react';
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../componrnts/FlexWrapper";
import {Container} from "../../../componrnts/Container";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Anya Alhovka</span></S.Name>
                        <S.MainTitle>A Front-End Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


