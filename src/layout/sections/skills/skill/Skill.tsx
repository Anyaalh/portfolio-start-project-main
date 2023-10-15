import React from 'react';
import {Icon} from "../../../../componrnts/icon/Icon";
import styled from "styled-components";

type SkillPropstype ={
    iconId: string
    title: string
    description: string

}

export const Skill = (props: SkillPropstype) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: #3a8eb2;
  margin: 10px;
`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`