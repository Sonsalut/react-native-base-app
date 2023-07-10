/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/redux/reucers';

AppRegistry.registerComponent(appName, () => App);

const store = createStore(allReducers);
