import React from 'react';
import Header from './Header';
import SectionMe from './SectionMe';

const data = {
  parrafo: "Hola, soy Daniela, Front End Developer. Descubrí el mundo tech en mi último año de escuela y hoy en día aspiro a desarrollarme como Full Stack Developer e involucrarme en un futuro, en el desarrollo de IA y robótica para mejorar la calidad de vida de las personas.",
  img: '1.jpg',
  hobbies: ['leer', 'codear', 'dormir', 'ir al cine']
};

const App = () => (
  <div>
    <Header/>
    <SectionMe parrafo={data.parrafo} img={data.img} hobbies={data.hobbies}/>
  </div>
)

export default App
