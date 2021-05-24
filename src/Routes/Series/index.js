import React from "react";
import styled from "styled-components";
import noImage from "../../assets/noImage.jpg";

const SeriesContainer = styled.div`
  margin-top: 2rem;
`;
const SeasonsContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 2rem;
`;
const PosterContainer = styled.div`
  padding-right: 1rem;
`;
const Poster = styled.img`
  height: 30rem;
`;
const Seasons = styled.span`
  font-size: 2rem;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  text-align: center;
  font-size: 1.5rem;
`;

const index = ({ result, loading }) => {
  return (
    <SeriesContainer>
      <Seasons>Number of seasons : {result.number_of_seasons}</Seasons>
      <SeasonsContainer>
        {result.seasons.map(season => (
          <PosterContainer key={season.id}>
            <Poster
              src={
                season.poster_path
                  ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
                  : noImage
              }
              alt="poster"
            />
            <TextContainer>
              <Text>
                Season {season.season_number} | Episodes :{" "}
                {season.episode_count}
              </Text>
            </TextContainer>
          </PosterContainer>
        ))}
      </SeasonsContainer>
    </SeriesContainer>
  );
};

export default index;
