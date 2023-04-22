import React, { useState } from 'react';
import Button from './Button';
import dynamic from 'next/dynamic';
import { DarkLayerContext } from './DarkLayerContext';
import LottiePlayerFunc from './LottiePlayer';
import RequestButton from './RequestButton';

function Hero(props) {
	// const LottiePlayer = dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });
	const [darkLayerPosition, setDarkLayerPosition] = useState(0);
	const handleDarkLayerPositionChange = (position) => {
		setDarkLayerPosition(position);
	  };

  return (

    
    <div className='hero'>
      <div className='container'>
        <div className={'hero__wrapper flex justify-between ' + props.classes}>
			<DarkLayerContext.Provider value={{ darkLayerPosition, onDarkLayerPositionChange: handleDarkLayerPositionChange }}>
				<div className='hero__layer'><div className='mini-layer'></div></div>
			</DarkLayerContext.Provider>
			<div className='hero__content w-full md:w-5/12'>
				<h1 className='main-title'>{props.title}</h1>
				<p className='hero__descr'>{props.descr}</p>
				<RequestButton
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