import css from '../assests/stackIcons/css.svg';
import firebase from '../assests/stackIcons/firebase.svg';
import graphql from '../assests/stackIcons/graphql.svg';
import vuejs from '../assests/stackIcons/vuejs.svg';
import react from '../assests/stackIcons/react.svg';
import tailwindcss from '../assests/stackIcons/tailwindcss.svg';
import javascript from '../assests/stackIcons/javascript.svg';
import html from '../assests/stackIcons/html.svg';
import { useEffect, useState } from 'react';

// make a ticker that useEffect tracks and then calls the randomImage function on change

const RandomIcon = () => {

  const [ticker, setTicker] = useState(0);
  const increaseTicker = () => {
    if(ticker < 15)
    setTimeout(() => {
      setTicker(ticker + 1);
      console.log('tick');
    }, 1000);
  };

  const [image, setImage] = useState(html)

  const getRandomNumber = (max) =>{
    return Math.floor(Math.random() * max);
  }

  const images = [html, javascript, vuejs, tailwindcss, react,graphql,firebase,css]



  useEffect(() => {
    increaseTicker()
    setImage(images[getRandomNumber(8)])
    // return () => {
    // }
  }, [ticker, ]);

  return <div className="w-8 h-8">
    <img src={image} alt="" />
  </div>;
};

export default RandomIcon;
