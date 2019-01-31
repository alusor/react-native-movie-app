import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { creators } from '../actions/movies';

class Movies extends Component {
  
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }
  render() {
    console.log(this.props)
    return (
      <View>

      </View>
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
