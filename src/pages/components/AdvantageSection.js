import React from 'react';
import { AdvantageIllustration } from '@/illustrations';
import { CheckBorderedIcon } from '@/icons';
import Button from './Button';
import LottiePlayerFunc from './LottiePlayer';

function Advantage() {
  return (
    <div className='advantage'>
        <div className='container'>
            <div className='advantage__inner flex'>
                <div className='w-full lg:w-6/12 advantage__illustration'>
                    <LottiePlayerFunc
						src='../lotties/advantage.json'
					/>
                </div>
                <div className='w-full lg:w-6/12 advantage__content'>
                  <h2 className='advantage__title sub-title mb-8'>Почему стоит выбрать нас?</h2>
                  <div className='advantage__content-wrapper'>
                    <div className='advantage__content-columns flex'>
						<div className='column-left w-1/2 column mr-4'>
							<div className='advantage__card mb-10'>
								<div className='advantage__card-heading mb-4'>
									<CheckBorderedIcon/>
									<span className='ml-3'>Сайт под ключ</span>
								</div>
								<div className='advantage__card-descr'>
								вы получите полностью готовый сайт с контентом и товарами. Вам не нужно будет думать чем заполнить сайт и тратить деньги на копирайтера
								</div>
							</div>
							<div className='advantage__card mb-10'>
								<div className='advantage__card-heading mb-4'>
									<CheckBorderedIcon/>
									<span className='ml-3'>Сайт под ключ</span>
								</div>
								<div className='advantage__card-descr'>
								вы получите полностью готовый сайт с контентом и товарами. Вам не нужно будет думать чем заполнить сайт и тратить деньги на копирайтера
								</div>
							</div>
						</div>
						<div className='column-right ml-4 w-1/2 column'>
							<div className='advantage__card mb-10'>
								<div className='advantage__card-heading mb-4'>
									<CheckBorderedIcon/>
									<span className='ml-3'>Сайт под ключ</span>
								</div>
								<div className='advantage__card-descr'>
								вы получите полностью готовый сайт с контентом и товарами. Вам не нужно будет думать чем заполнить сайт и тратить деньги на копирайтера
								</div>
							</div>
								<Button
									classes='btn btn-solid pink'
									content='консультация'
								/>
						</div>
					</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantage