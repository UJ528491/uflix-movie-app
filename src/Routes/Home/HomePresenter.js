import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({
  nowPlaying,
  upComing,
  topRated,
  popular,
  error,
  loading,
}) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date && movie.release_date.slice(0, 4)}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Up Coming Movies">
          {upComing.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date && movie.release_date.slice(0, 4)}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Movies">
          {topRated.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date && movie.release_date.slice(0, 4)}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date && movie.release_date.slice(0, 4)}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
