import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from './components/Header';
import styles from '@/styles/Home.module.css';
import Hero from './components/Hero';
import { IndexHero } from '@/illustrations';
import ProposalSection from './components/ProposalSection';
import ReasonSection from './components/ReasonSection';
import Advantage from './components/AdvantageSection';
import IndexPricesSection from './components/IndexPricesSection';
import IfSection from './components/IfSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProjectsSection from './components/ProjectsSection';
import RequestSection from './components/RequestSection';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <Hero
          title='Откройте новые возможности в онлайн-бизнесе'
          descr='Увеличьте онлайн-продажи с помощью профессионального интернет магазина и продвижения в Google, Kaspi и instagram'
          classes="index"
          illustration={IndexHero}
        />
        <ProposalSection />
        <ReasonSection/>
        <Advantage/>
        <IndexPricesSection/>
        <IfSection/>
        <HowItWorksSection/>
        <ProjectsSection/>
        <RequestSection/>
        <Footer/>
      </main>
    </>
  )
}
