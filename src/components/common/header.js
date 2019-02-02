import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Header = () => (
  <SafeAreaView style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 10, justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 44, fontWeight: 'bold'}}>Movies</Text>
      <View style={{ width: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
      <Icon name="md-search" size={20} style={{ marginBottom: 10 }}/>
      <Icon name="logo-octocat" size={20} style={{ marginBottom: 10 }}/>
      </View>
  </SafeAreaView>
);

export default Header;
