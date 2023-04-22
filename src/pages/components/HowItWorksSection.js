import React from 'react';
import { HowItWorksIconOne, HowItWorksIconTwo, HowItWorksIconThree, Arrow } from '@/icons';
import Button from './Button';
import RequestButton from './RequestButton';

function HowItWorksSection() {
  return (
    <div className='how-it-works'>
        <div className='container'>
            <h2 className='sub-title text-center'>Как это работает?</h2>
            <div className='how-it-works__inner flex justify-between mt-[80px]'>
                <div className='how-it-works__card w-3/12 items-center flex-col flex text-center'>
                    <div className='how-it-works__icon flex justify-center items-center mb-6'>
                        <HowItWorksIconOne/>
                    </div>
                    <div className='arrow arrow_one'><Arrow/></div>
                    <h4 className='how-it-works__title mb-3'>Оставьте заявку</h4>
                    <p className='how-it-works__descr'>или позвоните/напишите нам, для получения консультации</p>
                </div>
                <div className='how-it-works__card w-3/12 flex flex-col items-center text-center'>
                    <div className='how-it-works__icon flex justify-center items-center mb-6'>
                        <HowItWorksIconTwo/>
                    </div>
                    <div className='arrow arrow_two'><Arrow/></div>
                    <h4 className='how-it-works__title mb-3'>Оставьте заявку</h4>
                    <p className='how-it-works__descr'>или позвоните/напишите нам, для получения консультации</p>
                </div>
                <div className='how-it-works__card w-3/12 flex flex-col items-center text-center'>
                    <div className='how-it-works__icon flex justify-center items-center mb-6'>
                        <HowItWorksIconThree/>
                    </div>
                    <h4 className='how-it-works__title mb-3'>Оставьте заявку</h4>
                    <p className='how-it-works__descr'>или позвоните/напишите нам, для получения консультации</p>
                </div>
            </div>
            <div className='how-it-works__cta mt-[80px] flex justify-center'>
                <RequestButton
                    classes='btn btn-solid blue'
                    content='Оставить заявку'
                />
            </div>
        </div>
    </div>
  )
}

export default HowItWorksSection