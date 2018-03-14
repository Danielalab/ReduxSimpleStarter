import React from 'react';
import Hobbies from './Hobbies';

const SectionMe = ({parrafo, img, hobbies}) => {
  const listhobbies = hobbies.map( (hobbie, index) => {
    return <Hobbies hobbie={hobbie} key={index}/>
  });
   return (<section>
    {parrafo}
   <br/>
   <img src={img}/>
   <h4>Hobbies</h4>
   <ul>
    {listhobbies}
   </ul>
  </section>)
}


export default SectionMe