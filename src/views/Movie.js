import styled from 'styled-components';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import MovieCard from '../components/MovieCard';


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

class Movie extends Component {
  render() {
    const movie = this.props.navigation.getParam('movie')
    const { onPress } = this.props;
    return (
        <View>
            <CardContainer>
          <CardContent>
            <View>
              <Text style={{ fontWeight: 'bold' }}>{movie.show.name}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>{`Release: ${movie.show.premiered}`}</Text>
              <View style={{ flexDirection: 'row' }}>
                {movie.show.genres.map(genre => (
                  <View style={{ backgroundColor: '#FF9645', borderRadius: 10, padding: 3, margin: 2 }}>
                    <Text style={{ fontSize: 10, color: 'white' }}>{genre}</Text>
                  </View>
                ))}
              </View>
            </View>
           <View style={{ alignmovies: 'flex-end' }}>
            <TouchableOpacity onPress={onPress} style={{ marginTop: 10 }}>
                <Button>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>View more</Text>
                  <Icon name="right" color="white" size={14} style={{ marginLeft: 30 }} />            
                </Button>
              </TouchableOpacity>
           </View>
          </CardContent>
          <MovieCover>
            <ImageCover source={{ uri: movie.show.image.medium }}/>
          </MovieCover>
         </CardContainer>
        </View>
      )
  }
}

export default Movie;
