import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 150px;
  background-size: cover;
  border-radius: 10px;
  background-position: center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  /* display: none; */
  bottom: 5px;
  right: 5px;
  position: absolute;
  transition: opacity 0.1s linear;
  opacity: 0;
`;
const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;
  margin-bottom: 2px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgb(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : require("../assets/noImage.jpg").default
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length < 14 ? title : `${title.slice(0, 14)}...`}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
