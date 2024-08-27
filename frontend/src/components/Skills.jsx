import React from 'react';
import styled from 'styled-components';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
}from '../Styles/Global.styled';
import { SkillCard, SkillsCardContainer } from '../Styles/Skills.styled';
import { SkillsData } from '../utils/Data';

const Skills = () => {
    return( 
        <PaddingContainer
            id="Skills"
            top="10%"
            bottom="10%"
        >
            <FlexContainer fullwithChild>
                {/* skills container left*/}
                <SkillsCardContainer>
                    {SkillsData.map((skill)=>(
                        <SkillCard>
                            <IconContainer size="5rem" color="blue">
                                {skill.icon}
                            </IconContainer>
                            <Heading as="h4" size="h4"> 
                                {skill.tech}
                            </Heading>
                        </SkillCard>
                    ))}
                </SkillsCardContainer>
                {/* skills container right*/}
                <div>
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2" top="0.5rem">
                         What <BlueText> i can do</BlueText>
                    </Heading>
                    <ParaText top="2rem" bottom="1.5rem">
                        As a Developer, I have a wide experience in frontend development.
                        I am proficient in JavaScrip, ReactJs, NodeJs, HTML and CSS3.My 
                        strong experience in building responsive and dynamic user interfaces using
                        React and Redux has allowed me to create engaging and interactive web application. 
                    </ParaText>
                    <ParaText>
                        I have experience in using React for building scalable and maintainable applications.
                        This has allowed me to create efficient and sustainable code that can adept to changing 
                        needs of business.
                    </ParaText>
                </div>
            </FlexContainer>
        </PaddingContainer>
    
    
    );
}



export default Skills;