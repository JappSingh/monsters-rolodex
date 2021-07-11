import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

// Version 1: App doing the listing and CardList using props.children
/*
export const CardList = props => {
  return <div className='card-list'>{props.children}</div>;
};
*/

// Version 2: CardList doing the list mapping, receiving the list as props from App
// That list is "State" in App; When passed to CardList component, that state becomes a "prop"
// 'monsters' list which is State in App == monsters list as Props in CardList
/*
export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <h1 key={monster.id}> { monster.name } </h1>
    ))}
  </div>
);
*/

// Version 3: adds to ver 2: CardList uses Card component & passes it monster as props
export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

