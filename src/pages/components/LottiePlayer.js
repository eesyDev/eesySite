import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Lottie from 'lottie-web';


function LottiePlayerFunc(props) {
    return ( 
    <div>
        <Player
            autoplay
            loop
            src={props.src}
            // style={{ height: 'auto', width: 'auto' }}
        ></Player>
    </div>
  )
}

export default LottiePlayerFunc;