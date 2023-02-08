import React from 'react';
import './Card.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/item1.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Vitamins'
              path='/services'
            />
            <CardItem
              src='images/item2.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Supplement'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/item3.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Vitamins'
              path='/services'
            />
            <CardItem
              src='images/item4.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Whitening'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/item5.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Whitening'
              path='/services'
            />
            <CardItem
              src='images/item1.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Vitamins'
              path='/products'
            />
            <CardItem
              src='images/item2.jpg'
              text='asdasd asdasd asdasd asdasdas asdadas asdadasdasdasd'
              label='Vitamins'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;