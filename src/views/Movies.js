import React, { Component } from 'react';
import { FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { creators } from '../actions/movies';
import styled from 'styled-components';
import Header from '../components/common/header';
import MovieCard from '../components/MovieCard';

const Container = styled.View`
  flex: 1;
`;

class Movies extends Component {
  
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }
  renderMovies = ({item}) => (
   <MovieCard movie={item} onPress={() => this.props.navigation.navigate('Movie', { movie: item })} />
  )
  _keyExtractor = (item, index) => `${item.score} ${index}`
  render() {
    console.log(this.props);
    const { movies } = this.props;
    return (
      <Container>
        <Header />
        <FlatList
          data={movies}
          renderItem={this.renderMovies}
          keyExtractor={this._keyExtractor}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.getIn(['movies','movies']),
})

const actions = {
  getMovies: creators.getMovies,
}

export default connect(mapStateToProps, actions)(Movies);
