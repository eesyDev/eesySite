import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '@/redux/slices/project_slice';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { OnlineShop, Picture, Internet } from '@/icons';

function ProjectsSection() {

    const dispatch = useDispatch();
    const { projectsData, loading, error } = useSelector(state => state.projects)
    useEffect(() => {
      dispatch(fetchProjects())
    }, [dispatch]);
  
    const leftColumn = []
    const rightColumn = []

    const sliced_arr = projectsData?.slice(0, 4)
  
    sliced_arr?.forEach((item, index) => {
      if (index % 2 === 0) {
        leftColumn.push(item);
      } else {
        rightColumn.push(item);
      }
    });


  return (
    <div className='projects-section mt-[100px]'>
        <div className='container'>
            <div className='projects-section__inner flex'>
                <div className='projects-section__content w-5/12 pr-6 flex flex-col justify-center'>
                    <h2 className='sub-title'>Выполненные проекты</h2>
                    <p className='projects-section__descr mt-6'>особенность веб-сайта заключается в том, что вы можете отслеживать данные и измерять свои результаты, направляя свой бизнес в правильное русло</p>
                    <Link href='/' className='btn btn-solid blue mt-10'>Смотреть все проекты</Link>
                </div>
                <div className='projects-section__cards flex w-7/12'>
                    <div className='flex flex-col w-1/2 px-4'>
                        {
                        leftColumn.map((project) => (
                            <ProjectCard
                            key={project.id}
                            title={project.title}
                            link={project.link}
                            service_title={project.service[0].title}
                            />
                        ))
                        }
                    </div>
                    <div className='flex flex-col w-1/2 px-4 pt-10'>
                    {
                      rightColumn.map((project) => (
                        <ProjectCard
                          key={project.id}
                          title={project.title}
                          link={project.link}
                          service_title={project.service[0].title}
                        />
                      ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection