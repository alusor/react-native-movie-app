import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import App from './src/index.js';
import store from './src/store/store';

const AppContainer = createAppContainer(App);

const AppConected = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
)

export default AppConected;
