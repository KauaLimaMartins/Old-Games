import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Games from './screens/Games';
import Details from './screens/Details';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#F0F0F5',
                    },
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Games" component={Games} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
