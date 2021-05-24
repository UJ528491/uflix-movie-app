import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Helmet from "react-helmet";
import { ImdbIconUrl } from "../../api";
import { Route, Link, withRouter } from "react-router-dom";
import Media from "../Media";
import Infos from "../Info";
import Series from "../Series";
const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 100px;
`;
const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  opacity: 0.3;
  filter: blur(5px);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  border-radius: 10px;
`;
const Data = styled.div`
  width: 50%;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 40px;
  margin-bottom: 30px;
`;
const InfoContainer = styled.div`
  margin-bottom: 30px;
`;

const Info = styled.span`
  font-size: 20px;
`;

const Overview = styled.p`
  font-size: 22px;
  opacity: 0.7;
  line-height: 1.2;
`;

const Divider = styled.span`
  margin: 0 15px;
`;

const ImdbIcon = styled.img`
  height: 15px;
`;
const ExInfoContainer = styled.div`
  margin-top: 5rem;
`;
const SubTabContainer = styled.div`
  display: flex;
`;
const SubTab = styled(Link)`
  font-size: 1.5rem;
  padding: 3px 0;
  border-bottom: ${props => (props.selected ? "2px white solid" : "none")};
`;
const DetailPresenter = withRouter(
  ({ location: { pathname }, result, error, loading, isMovie, id }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | UFLIX</title>
        </Helmet>
        <Loader></Loader>
      </>
    ) : (
      <>
        <Helmet>
          <title>
            {" "}
            {result.original_title ? result.original_title : result.name} |
            UFLIX
          </title>
        </Helmet>
        <Container>
          <BackDrop
            bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          ></BackDrop>
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
                  : require("../../assets/noImage.jpg")
              }
            ></Cover>
            <Data>
              <Title>
                {result.original_title ? result.original_title : result.name}
              </Title>
              <InfoContainer>
                <Info>
                  {result.genres.map((genre, index) =>
                    index + 1 === result.genres.length
                      ? genre.name
                      : `${genre.name} / `
                  )}
                </Info>
                <Divider>•</Divider>
                <Info>
                  {result.release_date
                    ? result.release_date.slice(0, 4)
                    : result.first_air_date.slice(0, 4)}
                </Info>
                <Divider>•</Divider>
                <Info>
                  {result.runtime
                    ? `${result.runtime} min`
                    : `${result.episode_run_time[0]} min`}{" "}
                </Info>
                <Divider>•</Divider>
                <Info>
                  <a
                    href={
                      isMovie
                        ? `https://www.imdb.com/title/${result.imdb_id}/`
                        : `https://www.imdb.com/find?q=${result.original_name}`
                    }
                  >
                    <ImdbIcon src={ImdbIconUrl} alt="IMDb icon" />
                  </a>
                </Info>
              </InfoContainer>
              <Overview>{result.overview}</Overview>
              <ExInfoContainer>
                <SubTabContainer>
                  {isMovie ? (
                    <SubTab
                      to={`/movie/${id}`}
                      selected={pathname === `/movie/${id}`}
                    >
                      Media
                    </SubTab>
                  ) : (
                    <SubTab
                      to={`/show/${id}`}
                      selected={pathname === `/show/${id}`}
                    >
                      Series
                    </SubTab>
                  )}
                  <Divider></Divider>
                  <SubTab
                    to={`/${isMovie ? "movie" : "show"}/${id}/info`}
                    selected={
                      pathname === `/${isMovie ? "movie" : "show"}/${id}/info`
                    }
                  >
                    Production Info
                  </SubTab>
                </SubTabContainer>
                <Route exact path={`/${isMovie ? "movie" : "show"}/${id}`}>
                  {isMovie ? (
                    <Media result={result} loading={loading} />
                  ) : (
                    <Series result={result} loading={loading} />
                  )}
                </Route>
                <Route exact path={`/${isMovie ? "movie" : "show"}/${id}/info`}>
                  <Infos result={result} loading={loading} />
                </Route>
              </ExInfoContainer>
            </Data>
          </Content>
        </Container>
      </>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
