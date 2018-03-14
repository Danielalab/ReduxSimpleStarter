import React from 'react';
import Hobbies from './Hobbies';

const hobbies = ['leer', 'codear', 'dormir', 'ir al cine'].map( (hobbie,index) => {
  return <Hobbies hobbie={hobbie} key={index}/>
});

const SectionMe = () => (
  <section>
    "Hola, soy Daniela, Front End Developer. Descubrí el mundo 'tech' en mi último año de escuela 
    y hoy en día aspiro a desarrollarme como Full Stack Developer e involucrarme en un futuro, en 
    el desarrollo de IA y robótica para mejorar la calidad de vida de las personas."
   <br/>
   <h4>Hobbies</h4>
   <ul>
    {hobbies}
   </ul>
  </section>
)

export default SectionMe