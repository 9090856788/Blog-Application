/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PostCard from './PostCard'; // Assuming PostCard component is defined separately

const LandingPage = () => {
  // Dummy data for demonstration
  const recentPosts = [
    { id: 1, title: 'Recent Post 1', excerpt: 'Lorem ipsum dolor sit amet...' },
    { id: 2, title: 'Recent Post 2', excerpt: 'Lorem ipsum dolor sit amet...' },
    { id: 3, title: 'Recent Post 3', excerpt: 'Lorem ipsum dolor sit amet...' },
  ];

  const allPosts = [
    { id: 4, title: 'All Post 1', excerpt: 'Lorem ipsum dolor sit amet...' },
    { id: 5, title: 'All Post 2', excerpt: 'Lorem ipsum dolor sit amet...' },
    { id: 6, title: 'All Post 3', excerpt: 'Lorem ipsum dolor sit amet...' },
  ];

  const featuredPost = { id: 7, title: 'Featured Post', excerpt: 'Lorem ipsum dolor sit amet...' };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Featured Post
          </Typography>
          <PostCard post={featuredPost} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Recent Posts
          </Typography>
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            All Posts
          </Typography>
          {allPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
