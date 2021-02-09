import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 10px;
`;
const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV shows | UFLIX</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                imageUrl={show.poster_path}
                rating={show.vote_average}
              ></Poster>
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="Popular Shows">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                imageUrl={show.poster_path}
                rating={show.vote_average}
              ></Poster>
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
                imageUrl={show.poster_path}
                rating={show.vote_average}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
