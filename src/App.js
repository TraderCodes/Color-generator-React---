import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
   const [color, setColor] = useState('');
   const [error, setError] = useState(false);
   const [list, setList] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      // fetch from library error text
      try {
         let colors = new Values(color).all(10);
         setList(colors);
         setError(false);
         console.log(colors);
      } catch (error) {
         setError(true);
      }
   };

   return (
      <>
         <section className="container">
            <h3>color generator</h3>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="#F15000"
                  className={`${error ? 'error' : null}`}
               />
               <button className="btn" type="submit">
                  submit
               </button>
            </form>
         </section>
         <section className="colors">
            {list.map((color, index) => {
               return (
                  <SingleColor
                     key={index}
                     {...color}
                     index={index}
                     hexcolor={color.hex}
                  />
               );
            })}
         </section>
      </>
   );
}

export default App;
