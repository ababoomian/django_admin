import React from "react";
// import { icons } from "react-icons";


import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
}from '../Styles/Global.styled';


import {BsLinkedin,BsTwitter,BsInstagram,BsTelegram} from "react-icons/bs";
import { 
    
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle,
} from "../Styles/Showcase.styled";
import ProfilePic from '../asset/arbaboom.jpeg';
import BackgroundImg from '../asset/particle.png'
const Showcase = () =>
{
    return(
        <PaddingContainer
            id = "Home"
            left = "3%"
            right = "10%"
            top = "15%"
            bottom = "10%"
        >
            <FlexContainer align = "center" fullWithChild>
                <div>
                    <Heading as="h4" size = "h4">hello</Heading>
                    <Heading as="h1" size = "h1" bottom="1rem">
                        I'm <BlueText>arno baboomian</BlueText>
                        </Heading>
                        <Heading>
                             I'm a <BlueText> frontend developer</BlueText>
                        </Heading>
                        <ParaText as="p" top="2rem" bottom="4rem">
                                hello my nae is arno baboomian i'm a frontend developer
                        </ParaText>
                        <FlexContainer gap = "20px">
                            <IconContainer color = "white" size ="1.5">
                                 <BsLinkedin/>
                            </IconContainer>
                            <IconContainer color = "white" size ="1.5">
                                 <BsTwitter/>
                            </IconContainer>
                            <IconContainer color = "white" size ="1.5">
                                 <BsInstagram/>
                            </IconContainer>
                            <IconContainer color = "white" size ="1.5">
                                 <BsTelegram/>
                            </IconContainer>
                        </FlexContainer>
                </div>
                <FlexContainer justify="flex-end">
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ProfilePic}/>
                        </ShowcaseImageCard>
                        <Particle 
                            src={BackgroundImg}
                            alt = "particle"
                            top = "-80px"
                            left = "20px"
                            rotate = "60deg"
                        />
                        <Particle 
                            src={BackgroundImg}
                            alt = "particle"
                            top = "50px"
                            right = "-70px"
                            rotate = "0deg"
                        />
                        <Particle 
                            src={BackgroundImg}
                            alt = "particle"
                            bottom = "10px"
                            left = "-70px"
                            rotate = "50deg"
                        />
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}


export default Showcase