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
        Home: {
            screen : Home,
            
            navigationOptions : {
                headerShown : false
            }
        },
        Feed: Feed,
        Ryul_Portfolio : {
            screen : Profile,
            navigationOptions : {
                title : '',
                headerStyle : {
                    backgroundColor : 'black',
                    
                    borderBottomColor : 'black',
                    height : 20,
                },
                //headerShown : false,
            }
        },
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
        
        
        
          
    }
);

const Container = createAppContainer(TestStack);

export default TestStack;