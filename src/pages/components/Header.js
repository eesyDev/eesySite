import React from 'react';
import Link from 'next/link';
import { Logo } from '@/icons';
import Button from './Button';

function Header() {
  return (
    <div className='header w-full py-8'>
        <div className='container'>
            <div className='header__wrapper flex justify-between items-center'>
                <div className='header__logo'>
                    <Link href="/"><Logo/></Link>
                </div>
                <div className='header-right flex justify-between items-center'>
                    <div className='header__nav mr-10'>
                        <nav>
                            <ul className='flex'>
                                <li className='mx-4'>
                                    <Link href='/'>Главная</Link>
                                </li>
                                <li className='mx-4'>
                                    <Link href='/services'>Услуги</Link>
                                </li>
                                <li className='mx-4'>
                                    <Link href='/projects'>Проекты</Link>
                                </li>
                                <li className='mx-4'>
                                    <Link href='/blog'>Блог</Link>
                                </li>
                                <li className='mx-4'>
                                    <Link href='/contacts'>Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header__cta'>
                        <Button
                            classes='btn btn-bordered main-color'
                            content='консультация'
                        />
                    </div>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default Header