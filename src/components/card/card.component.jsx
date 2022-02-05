import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}1?set=set2`} />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
