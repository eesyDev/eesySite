import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/icons';
import { DarkLayerContext } from './DarkLayerContext';
import RequestButton from './RequestButton';
import BurgerMenu from './BurgerMenu';

function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 1200);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <header className='header w-full py-8'>
        <div className='container'>
            <div className='header__wrapper flex justify-between items-center'>
                <div className='header__logo'>
                    <Link href="/"><Logo/></Link>
                </div>
                <div className='header-right flex justify-between items-center'>
                    {
                        !isMobile ? (
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
                        ) : null
                    }
                    
                    <div className='header__cta'>
                        <RequestButton
                        classes="btn btn-bordered main-color"
                        content="Консультация"
                    />
                    {isMobile ? (<BurgerMenu/>) : ('')}
                    
                    </div>
                </div>               
            </div>
        </div>
    </header>
  )
}

export default Header