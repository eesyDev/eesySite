import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocials } from '@/redux/slices/social_slice';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Whatsapp, Instagram, Git, Telegram, Call } from '@/icons';

function index() {
  const dispatch = useDispatch();
  const {socialsData, loading, error } = useSelector(state => state.socials)
  useEffect(() => {
    dispatch(fetchSocials())
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Hero
          title='Контакты'
          descr="Контакты"
          illustration='../lotties/contacts.json'
          classes='contacts'
        />
        <div className='contacts my-8'>
          <div className='container'>
            <div className='contacts__wrapper flex'>
              <div className='w-5/12 pr-6 flex items-center'>
                <div className='contacts__item call'>
                  {
                    loading ? (
                      <div>Loading</div>
                    ) : error ? (
                      <div>Error</div>
                    ) : !socialsData ? (
                      <div>Not found</div>
                    ) : (
                      <div>
                        {
                          socialsData.map((social, index) => (
                            <div className='contacts__item'>
                            <Link href={social.link} className={social.title}>
                              {social.title === 'instagram' ? 
                                <i className='icon'><Instagram/></i>
                                : social.title === 'git' ? 
                                <i className='icon'><Git/></i>
                                : social.title === 'call' ? 
                                <i className='icon'><Call/></i>
                                : social.title === 'telegram' ? 
                                <i className='icon'><Telegram/></i> 
                                : social.title === 'whatsapp' ? 
                                <i className='icon'><Whatsapp/></i>
                                : ''
                              }
                              {social.title === 'call' ? 
                                '+7(705)567-66-22' : social.title
                              }
                            </Link>
                            </div>
                          ))
                        }
                      </div>
                    )
                  }
                </div>
              </div>
              <div className='w-7/12'>
                <h2 className='main-title mb-4'>Немного о нас</h2>
              Добро пожаловать в EESY DEV, веб агентство с полным спектром услуг, специализирующееся на веб-дизайне, решениях для электронной коммерции и цифровом маркетинге. Мы создаем красивые, адаптивные веб-сайты и индивидуальные решения для электронной коммерции, отвечающие уникальным потребностям наших клиентов.
              <br/><br/>
              Мы предлагаем ряд услуг в области цифрового маркетинга, чтобы помочь компаниям повысить свою узнаваемость в Интернете и привлечь больше клиентов, включая SEO, маркетинг в социальных сетях и рекламу с оплатой за клик. Наш опыт в цифровом маркетинге позволяет нам создавать целевые, эффективные кампании, которые приносят результаты.
              <br/><br/>
              Мы также являемся экспертами в интеграции веб-сайтов электронной коммерции с шоппинг-тегами в Instagram, что упрощает для компаний продажу своей продукции в социальных сетях. Используя возможности социальных сетей, мы помогаем нашим клиентам охватить новую аудиторию и увеличить продажи.
              <br/><br/>
              В EESY DEV мы стремимся помочь компаниям добиться успеха в цифровом мире. Если вы хотите запустить новый веб-сайт, продавать свои продукты в Интернете или увеличить свою популярность в Интернете, мы здесь, чтобы помочь. Свяжитесь с нами сейчас, чтобы узнать больше о том, как мы можем помочь вашему бизнесу расти.
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default index