import React from 'react'

function ServiceCard(props) {
  return (
    <div className='service-card'>
        <h3 className='service-card__title'>{props.title}</h3>
        <div className='service-content'>{props.content}</div>
    </div>
  )
}

export default ServiceCard