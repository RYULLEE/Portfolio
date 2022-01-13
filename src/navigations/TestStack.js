import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Home from '../screens/Home';
import Aboutme from '../screens/Aboutme';
import Skills from '../screens/Skills';
import Snap from '../screens/Snap';
import Card from '../screens/Card';
//import PageSnap from '../screens/PageSnap';
import Projects_info from '../screens/Projects_intro';
import Projects_1 from '../screens/Projects_1';
import Projects_2 from '../screens/Projects_2';
import Career from '../screens/Career';

const TestStack = createStackNavigator(
    {
        Home: Home,
        Feed: Feed,
        Ryul_Portfolio : Profile,
        Aboutme : Aboutme,
        Skills : Skills,
        Snap : Snap,
        Card : Card,
        Projects_info : Projects_info,
        Projects_1 : Projects_1,
        Projects_2 : Projects_2,
        Career : Career,
        
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