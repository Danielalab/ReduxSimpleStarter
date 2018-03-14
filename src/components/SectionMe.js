import React from 'react';
import Hobbies from './Hobbies';

const hobbies = ['leer', 'codear', 'dormir', 'ir al cine'].map( (hobbie, index) => {
  return <Hobbies hobbie={hobbie}/>
});

const SectionMe = ({parrafo, img}) => {
   return (<section>
    {parrafo}
   <br/>
   <img src={img}/>
   <h4>Hobbies</h4>
   <ul>
    {hobbies}
   </ul>
  </section>)
}


export default SectionMe