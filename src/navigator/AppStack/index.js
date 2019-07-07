import { createStackNavigator, createAppContainer } from 'react-navigation';
import DashboardScreen from '$screens/DashboardScreen';
import PhotoScreen from '$screens/PhotoScreen';
import { Dashboard, Photo } from './constants';

import { config } from './config';

export const AppStack = createAppContainer(
  createStackNavigator(
    {
      [Dashboard]: DashboardScreen,
      [Photo]: PhotoScreen
    },
    config
  )
);
