import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Home from '../screens/Home';


const TestStack = createStackNavigator(
    {
        Home: Home,
        Feed: Feed,
        Profile : Profile,
    },
    {
        initialRouteName: 'Profile'
    }
);

const Container = createAppContainer(TestStack);

export default TestStack;