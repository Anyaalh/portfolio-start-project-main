import React from 'react';
import {Icon} from "../../../../componrnts/icon/Icon";
import {FlexWrapper} from "../../../../componrnts/FlexWrapper";
import {S} from "../Skills_Styles"

type SkillPropstype ={
    iconId: string
    title: string
    description: string

}

export const Skill = (props: SkillPropstype) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>

                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>

                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

