import { useState } from 'react';
import { useEffect } from 'react';
import javascript from '../assests/stackIcons/javascript.svg';
import react from '../assests/stackIcons/react.svg';
import tailwindcss from '../assests/stackIcons/tailwindcss.svg';
import vuejs from '../assests/stackIcons/vuejs.svg';
import firebase from '../assests/stackIcons/firebase.svg';
import nodejs from '../assests/stackIcons/nodejs.svg';
import graphql from '../assests/stackIcons/graphql.svg';
import netlify from '../assests/stackIcons/netlify.svg';

const Grid = () => {
  const positions = {
    position1: [0, 0, 1],
    position2: [1, 0, 2],
    position3: [2, 0, 3],
    position4: [0, 1, 4],
    position5: [1, 1, 5],
    position6: [2, 1, 6],
    position7: [0, 2, 7],
    position8: [1, 2, 8],
    position9: [2, 2, 9],
  };

  const [blankPosition, setBlankPosition] = useState(positions.position9);
  const [oldPosition, setOldPosition] = useState(0);

  const moveTile = (array) => {
    // filter out oldPosition from array to avoid repeat tile movement
    let options = array.filter((number) => number !== oldPosition);

    // get tile number from availabe options once oldPosition removed
    let randomNumber = options[Math.floor(Math.random() * options.length)];

    // make moving tile variable
    let movingTile = document.getElementById(`tile${randomNumber}`);

    // move tile to blank location
    movingTile.style.setProperty('--x', blankPosition[0]);
    movingTile.style.setProperty('--y', blankPosition[1]);

    // update tile id
    movingTile.id = `tile${blankPosition[2]}`;

    //set old tile
    let oldBlank = blankPosition[2];
    setOldPosition(oldBlank);

    // set new blank location
    setBlankPosition(positions[`position${randomNumber}`]);
  };

  const changePosition = () => {
    // check blank position 0-9
    if (blankPosition[2] === 9) {
      moveTile([6, 8]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 8) {
      moveTile([5, 7, 9]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 7) {
      moveTile([4, 8]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 6) {
      moveTile([3, 5, 9]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 5) {
      moveTile([2, 4, 6, 8]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 4) {
      moveTile([1, 5, 7]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 3) {
      moveTile([2, 6]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 2) {
      moveTile([1, 3, 5]);
    }
    // check blank position 0-9
    else if (blankPosition[2] === 1) {
      moveTile([2, 4]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      changePosition();
    }, 1000);

    // return () => {
    //   second
    // }

    // eslint-disable-next-line
  }, [blankPosition]);

  return (
    <div className="cell-grid rotate-12 relative z-20" onClick={changePosition}>
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />
      <div className="cell" />

      <div className="tile flex items-center justify-center shadow-lg" id="tile1">
        <div className="w-2/3 h-2/3">
          <img src={nodejs} alt="" />
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile2">
        <div className="w-2/3 h-2/3 flex items-center justify-center">
          <img src={graphql} alt="" className='w-full'/>
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile3">
        <div className="w-1/2 h-1/2 flex items-center justify-center">
          <img src={firebase} alt="" />
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile4">
        <div className="w-2/3 h-2/3 flex items-center justify-center">
          <img src={netlify} alt="" />
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile5">
        <div className="w-2/3 h-2/3 flex items-center justify-center">
          <img src={javascript} alt="" />
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile6">
        <div className="w-2/3 h-2/3 flex items-center justify-center">
          <img src={react} alt="" />
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile7">
        <div className="w-2/3 h-2/3 flex items-center justify-center">
          <img src={vuejs} alt="" />
        </div>
      </div>
      <div className="tile flex items-center justify-center shadow-lg" id="tile8">
        <div className="w-2/3 h-2/3 flex items-center justify-center">
          <img src={tailwindcss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
