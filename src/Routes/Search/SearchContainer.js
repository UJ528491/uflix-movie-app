import { MoviesApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class searchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByterm(searchTerm);
    }
  };
  searchByterm = async () => {
    const { searchTerm } = this.state;
    this.setState({
      loading: true,
    });
    try {
      const {
        data: { results: movieResults },
      } = await MoviesApi.search(searchTerm);
      const {
        data: { results: showResults },
      } = await MoviesApi.search(searchTerm);
      this.setState({ movieResults, showResults });
    } catch {
      this.setState({
        error: "Can't find movies information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
