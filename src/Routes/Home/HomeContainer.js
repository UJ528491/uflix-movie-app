import React from "react";
import HomePresenter from "./HomePresenter";
import { MoviesApi } from "../../api";

export default class homeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await MoviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await MoviesApi.upComing();
      const {
        data: { results: topRated },
      } = await MoviesApi.topRated();
      const {
        data: { results: popular },
      } = await MoviesApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        topRated,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      nowPlaying,
      upComing,
      topRated,
      popular,
      error,
      loading,
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
