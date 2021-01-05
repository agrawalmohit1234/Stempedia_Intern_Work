import { connect } from 'react-redux';
import { createPost } from '../actions';
import ChildA from '../Parent/ChildA';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(null, mapDispatchToProps)(ChildA);