import Intro from '../screens/Intro';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();
AppNavigation(props)=>{
    return<Stack.Navigator>
        <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown:false }}
        />
    </Stack.Navigator>
}

export default AppNavigation;
