import React from 'react';
import { IfIllustration } from '@/illustrations';
import LottiePlayerFunc from './LottiePlayer';

function IfSection() {
  return (
    <div className='if-section'>
        <div className='container'>
        <h2 className='sub-title text-center'>А что если...</h2>
            <div className='if-section__wrapper flex justify-between'>
                <div className='if-section__illustration w-4/12'>
                    <LottiePlayerFunc
                        src='../lotties/what_if.json'
                    />
                </div>
                <div className='if-section__content w-6/12'>
                    <h3 className='if-section__heading'>вам нужны все услуги?</h3>
                    <p>ведь instagram это отличный инструмент для продвижения бизнеса. Но разбираться во всем этом долго, а не разобравшись вы только сольете бюджет. У нас для вас отличные новости: </p>
                    <ul>
                        <li>мы подключаем shopping теги</li>
                        <li>создаем Meta Business Suite</li>
                        <li>настраиваем таргет</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IfSection