import React from 'react';
import { CheckIcon } from '@/icons';

function IndexPricesCard(props) {
  return (
    <div className='index-prices-card'>
        <div className='index-prices-card__inner'>
            <h4 className='index-prices-card__title mb-1'>{props.title}</h4>
            <p className='index-prices-card__subtitle mb-4'>{props.subtitle}</p>
            <span className='index-prices-card__price mb-4 block'><span className='from mr-3'>от</span><span className='price'>{props.price}</span></span>
            <ul className='index-prices-card__service-list'>
                {props.serviceList.map((service) =>(
                    <li className='mb-3'>
                        <i className='mr-2'><CheckIcon/></i>
                        {service}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default IndexPricesCard