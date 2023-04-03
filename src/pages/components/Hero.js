import React from 'react';
import Button from './Button';
import dynamic from 'next/dynamic';
// import '@lottiefiles/lottie-player';
import LottiePlayerFunc from './LottiePlayer';

function Hero(props) {
	// const LottiePlayer = dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });
  return (
    <div className='hero'>
      <div className='container'>
        <div className={'hero__wrapper flex justify-between ' + props.classes}>
			<div className='hero__layer'><div className='mini-layer'></div></div>
			<div className='hero__content w-5/12'>
				<h1 className='main-title'>{props.title}</h1>
				<p className='hero__descr'>{props.descr}</p>
				<Button
				classes='btn btn-solid green'
				content='консультация'
				/>
			</div>
			<div className='hero__illustration w-7/12'>
            	<LottiePlayerFunc
					src={props.illustration}
				></LottiePlayerFunc>
				
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero