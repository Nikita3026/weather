import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { AntDesign } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors.main.tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <TabOneIcon name="ios-code" />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => <TabTwoIcon name="ios-code" />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabOneIcon(props: { name: string;}) {
  return <AntDesign name="cloud" size={24} color = {Colors.main.tabIconSelected} />;
}

function TabTwoIcon(props: { name: string;}) {
  return <AntDesign name="barschart" size={24} color = {Colors.main.tabIconSelected} />;
}


const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Forecast"
        component={TabOneScreen}
        options={{ headerTitle: 'Forecast' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Statistic"
        component={TabTwoScreen}
        options={{ headerTitle: 'Statistic' }}
      />
    </TabTwoStack.Navigator>
  );
}
