/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    image: "/img/login.jpg",
    title: "Blog Post 1",
    description: "This is a description for Blog Post 1.",
  },
  {
    image: "/img/forgotpass.jpg",
    title: "Blog Post 1",
    description: "This is a description for Blog Post 1.",
  },
  {
    image: "/img/signup.jpg",
    title: "Blog Post 1",
    description: "This is a description for Blog Post 1.",
  },
];

const BlogCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          margin: "2px",
        }}
      >
        <Box
          sx={{
            maxWidth: "70%",
            margin: "2px",
          }}
        >
          <Slider {...settings}>
            {blogPosts.map((post, index) => (
              <Box key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    width="100%"
                    maxWidth="440px"
                    height="450px"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography variant="h5">{post.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
        <Box
          sx={{
            maxWidth: "90%",
            margin: "2px",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default BlogCarousel;
