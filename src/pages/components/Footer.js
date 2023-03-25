import React from 'react';
import { LogoDark } from '@/icons';
import Link from 'next/link';
import Button from './Button';

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer__wrapper flex justify-between'>
                <div className='footer__column w-4/12 pr-[50px]'>
                    <Link href="/" className='logo'>
                        <LogoDark/>
                    </Link>
                    <p>особенность веб-сайта заключается в том, что вы можете </p>
                </div>
                <div className='footer__column w-2/12'>
                    <div className='footer__column-title'>Меню</div>
                    <ul className=''>
                        <li className='my-4'>
                            <Link href='/'>Главная</Link>
                        </li>
                        <li className='my-4'>
                            <Link href='/'>Услуги</Link>
                        </li>
                        <li className='my-4'>
                            <Link href='/'>Проекты</Link>
                        </li>
                        <li className='my-4'>
                            <Link href='/'>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer__column w-2/12'>
                <div className='footer__column-title'>EesyDev</div>

                <ul className=''>
                    <li className='my-4'>
                        <Link href='/'>Предложения</Link>
                    </li>
                    <li className='my-4'>
                        <Link href='/'>Прайс</Link>
                    </li>
                    <li className='my-4'>
                        <Link href='/'>Блог</Link>
                    </li>
                    <li className='my-4'>
                        <Link href='/'>Оферта</Link>
                    </li>
                    <li className='my-4'>
                        <Link href='/'>Брифинг</Link>
                    </li>
                </ul>
                </div>
                <div className='footer__column w-3/12'>
                <div className='footer__column-title'>Связаться</div>
                <div className='footer__column-wrap flex flex-col '>
                    <Link href="mailto:info@eesydev.kz" className='mb-4'>info@eesydev.kz</Link>
                    <Link href='tel:+77055676622' className='mb-4'>+7 705 567 66 22</Link>
                    <Button
                        classes="btn btn-solid blue small"
                        content="Заказать звонок"
                    />
                </div>
                </div>
            </div>
        </div>
        <div className='footer__bottom mt-[50px]'>
            <div className='flex text-center'>Copyright © 2023 EEsydev, All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer