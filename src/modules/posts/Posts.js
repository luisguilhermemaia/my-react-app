import React, { Component } from 'react';
import Post from './components/post/Post'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  };

  componentDidMount() {
    //Fetch to a fake api, this time using promises
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(
        (posts) => {
          this.setState({
            isLoaded: true,
            posts
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const postItems = posts.map((post) =>
        <Post key={post.id} post={post} />
      );
      return (
        <ul>{postItems}</ul>
      );
    };
  };
};

export default Posts;
