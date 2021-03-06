import React from 'react';
import Hobbies from './Hobbies';

const SectionMe = ({parrafo, img, hobbies}) => {
  const listhobbies = hobbies.map( (hobbie, index) => {
    return <Hobbies hobbie={hobbie} key={index}/>
  });
  return (
   <section>
    <p>{parrafo}</p>
    <br/>
    <img src={img}/>
    <h4>Hobbies</h4>
    <ul>
     {listhobbies}
    </ul>
  </section>)
}

SectionMe.propTypes = {
  parrafo: PropTypes.string.isRequired,
  img: PropTypes.string,
  hobbies: PropTypes.array.isRequired,
}

Article.defaultProps = {
  img: 'image not found',
};

export default SectionMe