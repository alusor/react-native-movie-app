import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native';

const Header = () => (
  <SafeAreaView>
    <Text style={{ fontSize: 44, fontWeight: 'bold', padding: 10 }}>Movies</Text>
  </SafeAreaView>
);

export default Header;
