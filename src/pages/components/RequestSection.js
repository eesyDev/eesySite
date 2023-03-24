import React from 'react';
import { RequestIllustration } from '@/illustrations';
import Button from './Button';
import { Whatsapp, Telegram, Instagram, Git } from '@/icons';
import Link from 'next/link';

function RequestSection() {
  return (
    <div className='request container'>
        <div className='request__wrapper flex justify-between'>
            <div className='request__illustration w-4/12'>
                <RequestIllustration/>
            </div>
            <div className='request__content w-7/12 flex flex-col justify-center'>
                <h2 className='request__title'>Оставьте заявку</h2>
                <form className='request__form mt-8'>
                    <div className='request__form-wrapper flex'>
                        <input type='text' className='form-input mr-4' placeholder='name'/>
                        <input type='tel' className='form-input mr-4' placeholder='phone'/>
                        <Button
                            classes='btn btn-solid green'
                            content='Отправить'
                        />
                    </div>
                </form>
                <div className='request__social mt-8'>
                    <h5 className='request__social-title'>Мы в соц сетях:</h5>
                    <div className='request__social-wrapper flex mt-4'>
                    <Link href='/'>
                        <Whatsapp/>
                    </Link>
                    <Link href='/'>
                        <Telegram/>
                    </Link>
                    <Link href='/'>
                        <Instagram/>
                    </Link>
                    <Link href='/'>
                        <Git/>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestSection