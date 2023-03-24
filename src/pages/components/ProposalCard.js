import React from 'react'

function ProposalCard(props) {
    const Icon = props.icon
  return (
    <div className='proposal-card'>
        <div className='proposal-card__inner'>
            <div className='proposal-card__icon'>
                <Icon/>
            </div>
            <div className='proposal-card__title'>
                { props.title }
            </div>
            <div className='proposal-card__description'>
                { props.descr }
            </div>
        </div>
    </div>
  )
}

export default ProposalCard