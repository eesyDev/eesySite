import React from 'react';
import IndexPricesCard from './IndexPricesCard';
import Link from 'next/link';
// import Display from '../../../public/img/display.png';

function IndexPricesSection() {
  return (
    <div className='index-prices'>
        <div className='container'>
            <h2 className='sub-title text-center'>Немного о ценах</h2>
            <div className='index-prices__inner flex justify-between'>
                <IndexPricesCard
                    title='Интернет-магазин'
                    subtitle='на базе шаблона'
                    price='150 000 ₸'
                    serviceList={['разработка шаблона', 'подключение домена', 'залив на хостинг', 'подключение платежных систем', 'загрузка товаров', 'наполнение контентом']}
                />
                <IndexPricesCard
                    title='Интернет-магазин'
                    subtitle='индивидуальная разработка'
                    price='250 000 ₸'
                    serviceList={['разработка шаблона', 'подключение домена', 'залив на хостинг', 'подключение платежных систем', 'загрузка товаров', 'наполнение контентом']}
                />
                <IndexPricesCard
                    title='Одностраничник'
                    subtitle=''
                    price='100 000 ₸'
                    serviceList={['разработка шаблона', 'подключение домена', 'залив на хостинг', 'подключение платежных систем', 'загрузка товаров', 'наполнение контентом']}
                />
            </div>
            <div className='index-prices__cta flex justify-center'>
                <Link href='/' className='btn btn-solid green'>Подробнее о ценах</Link>
            </div>
            <div className='index-prices__description'>
                <div className='index-prices__description-section mx-auto text-center w-9/12'>
                    <h2 className='sub-title'>Вы получите удобный и мощный инструмент для привлечения новых клиентов</h2>
                    <p className='mt-4'>особенность веб-сайта заключается в том, что вы можете отслеживать данные и измерять свои результаты, направляя свой бизнес в правильное русло</p>
                
                </div>
                <div className='index-prices__display'>
                    <img src='/img/left.png' className='left'/>
                    <img src='/img/mainDisplay.png' className='main'/>
                    <img src='/img/right.png' className='right'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default IndexPricesSection