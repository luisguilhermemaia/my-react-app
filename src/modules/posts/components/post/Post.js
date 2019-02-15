import React, { Component } from 'react';
import { PostItem, Title, Title2 } from '../../../theme';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <PostItem>
        <Title color="#222">
          {post.name}
        </Title>
        <Title2 color="#222">
          {post.email}
        </Title2>
        <Title2 color="#222">
          {post.body}
        </Title2>
      </PostItem>
    )
  };
};

export default Post;