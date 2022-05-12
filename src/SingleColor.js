import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexcolor }) => {
   const [alert, setAlert] = useState(false);
   const bcg = rgb.join(',');
   console.log(bcg);
   return (
      <article
         // change text color base from what index number is , if its bigger than 10 it changes text color
         className={`color `}
         style={{ backgroundColor: `rgb(${bcg})` }}
      >
         <p className="parent-value">{weight}%</p>
         <p className="color-value">#{hexcolor}</p>
      </article>
   );
};

export default SingleColor;
