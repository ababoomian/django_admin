import React from 'react';


import {
    PaddingContainer,
    Heading,
    BlueText,
}from '../Styles/Global.styled';

import  {ProjectDetails} from '../utils/Data'
import Projects from './layout/Projects';

const MyProjects = () => {
    return(
        <PaddingContainer id="Projects" top="5%" bottom="5%">
            <Heading as="h4" size="h4">
                My Projects
            </Heading>
            <Heading as="h2" size="h2" top="0.5rem">
                What <BlueText>I have built</BlueText>
            </Heading>
            { ProjectDetails.map((project)=> (
                <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <Projects data={project}/>

                </PaddingContainer>
            ))}
        </PaddingContainer>
    );
}


export default MyProjects;