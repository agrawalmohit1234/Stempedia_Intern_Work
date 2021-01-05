import React from 'react';
import { connect } from 'react-redux';
import ChildB from '../Parent/ChildB';

function PostData({ posts }) {
  return (
    <div>
      <ChildB post={posts} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};


export default connect(mapStateToProps)(PostData);