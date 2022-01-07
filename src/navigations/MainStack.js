import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../screens/Home';
import Home2 from '../screens/Home2';

const MainStack = createStackNavigator(
    {
        Home: {
            screen: Home,
          },
        Home2: {
            screen: Home2,
          },
    },
    {
        initialRouteName: 'Home' // 처음 보여 줄 화면을 설정합니다.
      },
);

const Stack1 = createAppContainer(MainStack);

export default Stack1;

//export default MainStack;