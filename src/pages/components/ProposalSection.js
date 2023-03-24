import React from 'react';
import ProposalCard from './ProposalCard';
import { ServiceDesign, ServiceSeo, ServiceTarget, SeviceMarketplace } from '@/icons';
import Button from './Button';
import Link from 'next/link';


function ProposalSection() {
  return (
    <div className='proposal'>
        <div className='container'>
            <div className='proposal__title sub-title text-center'>Что мы предлагаем?</div>
            <div className='proposal__inner flex '>
                <ProposalCard
                    icon={ServiceDesign}
                    title='Дизайн и разработка
                    сайтов / интернет-магазинов'
                    descr='Увеличьте онлайн-продажи с помощью профессионального интернет магазина и продвижения в Google, Kaspi и instagram'
                />
                <ProposalCard
                    icon={ServiceSeo}
                    title='Дизайн и разработка
                    сайтов / интернет-магазинов'
                    descr='Увеличьте онлайн-продажи с помощью профессионального интернет магазина и продвижения в Google, Kaspi и instagram'
                />
                <ProposalCard
                    icon={ServiceTarget}
                    title='Дизайн и разработка
                    сайтов / интернет-магазинов'
                    descr='Увеличьте онлайн-продажи с помощью профессионального интернет магазина и продвижения в Google, Kaspi и instagram'
                />
                <ProposalCard
                    icon={SeviceMarketplace}
                    title='Дизайн и разработка
                    сайтов / интернет-магазинов'
                    descr='Увеличьте онлайн-продажи с помощью профессионального интернет магазина и продвижения в Google, Kaspi и instagram'
                />
            </div>
            <div className='mt-10 flex justify-center'>
                <Link href='/' className='btn btn-solid blue'>Смотреть все услуги</Link>
            </div>
        </div>
    </div>
  )
}

export default ProposalSection