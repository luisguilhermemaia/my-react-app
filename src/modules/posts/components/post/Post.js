import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <li>
        {post.name}
        {post.body}
        {post.email}
      </li>
    )
  };
};

Post.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  })
};

export default Post;