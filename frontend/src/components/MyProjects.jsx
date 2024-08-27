import React, { useEffect, useState } from 'react';


import {
    PaddingContainer,
    Heading,
    BlueText,
}from '../Styles/Global.styled';

import  {ProjectDetails} from '../utils/Data'
import Projects from './layout/Projects';
import { fetchProjects } from '../core/ApiService';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadProjects = async () => {
        try {
          const data = await fetchProjects();
          setProjects(data);
        } catch (error) {
          setError('Failed to fetch projects.');
        } finally {
          setLoading(false);
        }
      };
  
      loadProjects();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return(
        <PaddingContainer id="Projects" top="5%" bottom="5%">
            <Heading as="h4" size="h4">
                My Projects
            </Heading>
            <Heading as="h2" size="h2" top="0.5rem">
                What <BlueText>I have built</BlueText>
            </Heading>
            { projects.map((project)=> (
                <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <Projects data={project}/>

                </PaddingContainer>
            ))}
        </PaddingContainer>
    );
}


export default MyProjects;