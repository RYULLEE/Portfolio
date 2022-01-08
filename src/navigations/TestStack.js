import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Home from '../screens/Home';
import Aboutme from '../screens/Aboutme';
import Skills from '../screens/Skills';

const TestStack = createStackNavigator(
    {
        Home: Home,
        Feed: Feed,
        Ryul_Portfolio : Profile,
        Aboutme : Aboutme,
        Skills : Skills,
    },
    {
        initialRouteName: 'Ryul_Portfolio',
        screenOptions: {
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              
            },
            headerTitle: '회원가입',
          },
          options : {
            headerTitle: '회원가입',
          }
    }
);

const Container = createAppContainer(TestStack);

export default TestStack;