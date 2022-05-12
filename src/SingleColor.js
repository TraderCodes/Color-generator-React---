import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexcolor }) => {
   const [alert, setAlert] = useState(false);
   const bcg = rgb.join(',');
   const hexValue = `#${hexcolor}`;
   console.log(bcg);
   useEffect(() => {
    //   delete the clipboard alert is on  
      setTimeout(() => {
         setAlert(false);
      }, 3000);
// clear so it won't be on a loop
      return () => clearTimeout;
   }, [alert]);

   return (
      <article
         // change text color base from what index number is , if its bigger than 10 it changes text color
         className={`color `}
         style={{ backgroundColor: `rgb(${bcg})` }}
         onClick={() => {
            setAlert(true);
            //  set copy on click
            navigator.clipboard.writeText(hexValue);
         }}
      >
         <p className="parent-value">{weight}%</p>
         <p className="color-value">#{hexcolor}</p>
         {/* set alert when user copied the color by clicking  */}
         {alert && <p className="alert"> Copied to clipboard</p>}
      </article>
   );
};

export default SingleColor;
