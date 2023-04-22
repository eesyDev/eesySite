import React from 'react';
import Link from 'next/link';
import { ArrowProjects } from '@/icons';
import { Developement, EShop, Design, Seo, Social } from '@/icons';


function ProjectCard(props) {
  return (
    <div className='project-card'>
        <Link href={props.link} className='flex flex-col items-center'>
            <div className='project-card__icon'>
            {
              props.service_title === 'Разработка' ?
              <Developement/>
              : props.service_title === 'Интернет-магазин' ?
              <EShop/> : props.service_title === 'Дизайн' ?
              <Design/> : props.service_title === 'Продвижение' ?
              <Seo/> : props.service_title === 'Социальные сети' ?
              <Social/> : ''
            }
            </div>
            <h4 className='project-card__title mt-4'>{props.title}</h4>
            <div className='project-card__more mt-8'>подробнее <i><ArrowProjects/></i></div>
        </Link>
    </div>
  )
}

export default ProjectCard