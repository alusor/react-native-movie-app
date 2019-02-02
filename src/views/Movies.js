import React, { Component } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { creators } from '../actions/movies';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign'
import Header from '../components/common/header';

const Container = styled.View`
  flex: 1;
`;

const CardContainer = styled.View`
  position: relative;
  height: 200px;
  margin: 10px;
  justify-content: flex-end;
`;
const CardContent = styled.View`
  border-radius: 12px;
  background: white;
  padding: 10px;
  padding-left: 100px;
  shadow-opacity: 0.2;
  shadow-radius: 30px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;
const MovieCover = styled.View`
  position: absolute;
  width: 80px;
  height: 130px;
  resize-mode: stretch;
  border-radius: 6px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  transform: translateY(-50px) translateX(10px);
`;
const ImageCover = styled.Image`
   width: 80px;
  height: 130px;
  border-radius: 6px;
`;

const Button = styled.View`
  background-color: #FF9645;
  padding: 10px 20px;
  border-radius: 6px;
  margin-bottom:10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  shadow-color: #FF9645;
  shadow-offset: 0px 0px;
  transform: translateX(10px);
  flex-direction: row;
`;

class Movies extends Component {
  
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }
  renderMovies = ({item}) => (
   <CardContainer>
    <CardContent>
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.show.name}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{`Release: ${item.show.premiered}`}</Text>
        <View style={{ flexDirection: 'row' }}>
          {item.show.genres.map(genre => (
            <View style={{ backgroundColor: '#FF9645', borderRadius: 10, padding: 3, margin: 2 }}>
              <Text style={{ fontSize: 10, color: 'white' }}>{genre}</Text>
            </View>
          ))}
        </View>
      </View>
     <View style={{ alignItems: 'flex-end' }}>
      <TouchableOpacity style={{ marginTop: 10 }}>
          <Button>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>View more</Text>
            <Icon name="right" color="white" size={14} style={{ marginLeft: 30 }} />            
          </Button>
        </TouchableOpacity>
     </View>
    </CardContent>
    <MovieCover>
      <ImageCover source={{ uri: item.show.image.medium }}/>
    </MovieCover>

   </CardContainer>
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
