import React from 'react';
import Link from 'next/link';
import { ArrowProjects } from '@/icons';


function ProjectCard(props) {
    const Icon = props.icon
  return (
    <div className='project-card'>
        <Link href={props.link} className='flex flex-col items-center'>
            <div className='project-card__icon'>
                <Icon/>
            </div>
            <h4 className='project-card__title mt-4'>{props.title}</h4>
            <div className='project-card__more mt-8'>подробнее <i><ArrowProjects/></i></div>
        </Link>
    </div>
  )
}

export default ProjectCard