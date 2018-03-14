import { connect } from 'react-redux';
import SectionMe from '../components/SectionMe';

const SectionWithRedux = connect(
  function mapStateToProps(state) {
    const {
      parrafo,
      img,
      hobbies
    } = state.AppReducer;

    return {
      parrafo: parrafo,
      img: img,
      hobbies: hobbies
    };
  }
)(SectionMe);

export default SectionWithRedux;