import React from 'react';
import {Icon} from "../../componrnts/icon/Icon";
import {FlexWrapper} from "../../componrnts/FlexWrapper";
import {S} from "./Footer_Styles"


const socialItemData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "linkedin"
    },
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Anya</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Anya Alhovka, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

