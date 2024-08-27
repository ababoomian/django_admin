import {FaReact,FaNode,FaCss3Alt}from 'react-icons/fa'
import {SiJavascript}from 'react-icons/si'
import Project1 from '../asset/Project1.png'
import Project2 from '../asset/Project2.png'

export  const SkillsData = [

    {
        id: 0,
        tech:'React JS',
        icon: <FaReact/>
    },
    {
        id: 1,
        tech:'Node JS',
        icon: <FaNode/>
    },
    {
        id: 2,
        tech:'CSS',
        icon: <FaCss3Alt/>
    },
    {
        id: 3,
        tech:'JavaScript',
        icon: <SiJavascript/>
    },
   
]

export const ProjectDetails = [

    {
        id:0,
        project_name:"Resturant App",
        project_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tech_stack:['ReactJs','Tailwind','Firebase'],
        project_img: Project1,
        reverse:false,
    },
    {
        id:1,
        project_name:"Animax",
        project_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tech_stack:['ReactJs','Firebase'],
        project_img: Project2,
        reverse:false,
    },


]
