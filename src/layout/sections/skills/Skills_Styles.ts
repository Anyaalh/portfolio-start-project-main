import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;
  
  @media ${theme.media.mobile}{
    padding: 62px 0 40px;
  }
  
`

export const IconWrapper=styled.div`
position: relative;
  
  &::before{
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.10);
    position: absolute;
    left: 50%;
    top:50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`

const Skills = styled.section`

`
export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}