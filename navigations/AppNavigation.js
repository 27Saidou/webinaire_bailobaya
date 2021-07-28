import ConnexionPhone from '../screens/auth/ConnexionPhone';
import Intro from '../screens/Intro';
import Login from '../screens/auth/Login';
import React from 'react';
import Register from '../screens/auth/Register';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function AppNavigation(props) {
    return <Stack.Navigator>
        <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Login"
            component={Login}
            options={{ headerShown: false }} />
        <Stack.Screen name="ConnexionPhone"
            component={ConnexionPhone}
            options={{ headerShown: false }} />
        <Stack.Screen name="Register"
            component={Register}
            options={{ headerShown: false }} />
    </Stack.Navigator>

}

export default AppNavigation;
