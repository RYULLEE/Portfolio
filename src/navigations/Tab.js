import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Home2 from '../screens/Home2';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
    <Tab.Navigator>
        <Tab.Screen name='HOME' component={Home} />
        <Tab.Screen name='HOME2' component={Home2} />
    </Tab.Navigator>
    );
};

export default TabNavigation;