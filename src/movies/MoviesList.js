/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Movie from "./Movie";
import { getMovies } from "./actions";

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
