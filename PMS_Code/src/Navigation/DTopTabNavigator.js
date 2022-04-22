import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainProjectScreen from '../Screens/MainProjectScreen/MainProjectScreen.js';
import DeveloperInfoScreen from '../Screens/DeveloperInfoScreen/DeveloperInfoScreen';
import UpdateSatusScreen from '../Screens/UpdateStatusScreen/UpdateStatusScreen';
import GiveProjectScreen from '../Screens/GiveProject/GiveProjectScreen.js';

const DTopTab = createMaterialTopTabNavigator();
const DTopTabNavigator = () => {

    return (
        <DTopTab.Navigator
            screenOptions={{
                // tabBarLabelStyle: {fontSize: 13},
                // tabBarItemStyle: {height: 45, marginBottom: 2, alignSelf: 'center'},
                tabBarLabelStyle: { fontSize: 13 },
                tabBarItemStyle: {
                    height: 60,
                    marginBottom: 4,
                    width: 100,
                    alignSelf: 'center',
                },
                headerShown: true,
            }}>
            <DTopTab.Screen name="Projects Details" component={MainProjectScreen} />
            <DTopTab.Screen name="Add Project" component={GiveProjectScreen} />
            <DTopTab.Screen
                name="Developers Details"
                component={DeveloperInfoScreen}
            />
            <DTopTab.Screen name="Project Status" component={UpdateSatusScreen} />
        </DTopTab.Navigator>
    );
};

export default DTopTabNavigator;
