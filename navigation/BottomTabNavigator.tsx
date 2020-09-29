import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';

import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  isTableUpToDate:boolean,
  setTableUpToDateStatus:Function
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const [isTableUpToDate, setTableUpToDateStatus] = useState(false);

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors.main.tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <TabOneIcon name="ios-code" />,
          isTableUpToDate:isTableUpToDate,
          setTableUpToDateStatus:setTableUpToDateStatus
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => <TabTwoIcon name="ios-code" />,
          isTableUpToDate:isTableUpToDate,
          setTableUpToDateStatus:setTableUpToDateStatus
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

function TabOneNavigator(props:Props) {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Forecast"
        component={TabOneScreen}

        options={{
          headerTitle: 'Forecast',
          isTableUpToDate:props.isTableUpToDate,
          changeTableUpToDateStatus:props.setTableUpToDateStatus
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator(props:Props) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Statistic"
        component={TabTwoScreen}
        options={{
        headerTitle: 'Statistic',
        isTableUpToDate:props.isTableUpToDate,
        changeTableUpToDateStatus:props.setTableUpToDateStatus
        }}
      />
    </TabTwoStack.Navigator>
  );
}
