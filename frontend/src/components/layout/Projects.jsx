import React from 'react';
import styled from 'styled-components';


import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
}from '../../Styles/Global.styled';

import { FaGithub } from 'react-icons/fa';
import { ProjectImage, ProjectImageContainer, TechStackCard } from '../../Styles/MyProjects.styled';
import Project1 from '../../asset/Project1.png'
const Projects = ({data}) => {
    return(
        <FlexContainer fullWithChild>
            <div>
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem" top="1rem">
                        {data.project_name}
                    </Heading>
                    <IconContainer color="blue" size="2rem">
                        <FaGithub/>
                    </IconContainer>
                </FlexContainer>
                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {data.tech_stack.map((stack)=>(
                            <TechStackCard>{stack}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>
                <ParaText top="1.5rem" bottom="2rem">{data.project_desc}</ParaText>
                <Button>Visit Website</Button>
            </div>
            <div>
                <ProjectImageContainer justify="flex-end"> 
                    <ProjectImage src={data.project_img} alt={data.project_name}/>
                </ProjectImageContainer>
            </div>
        </FlexContainer>
    );
}


export default Projects;