

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MainView, BasketView, CabinetView, NotificationsView, FavoritesView} from './screens'
import {TabBar} from './components'
import {StyleGuide} from './src/resources/StyleGuide';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
        <HomeStack.Screen name="MainView" component={MainView}/>
    </HomeStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator();

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <FavoritesStack.Screen name="FavoritesView" component={FavoritesView}/>
    </FavoritesStack.Navigator>
  )
}

const NotificationsStack = createStackNavigator();

function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen name="NotificationView" component={NotificationsView}/>
    </NotificationsStack.Navigator>
  )
}

const CabinetStack = createStackNavigator();

function CabinetStackScreen() {
  return (
    <CabinetStack.Navigator>
      <CabinetStack.Screen name="CabinetView" component={CabinetView}/>
    </CabinetStack.Navigator>
  )
}

const BasketStack = createStackNavigator();

function BasketStackScreen() {
  return(
    <BasketStack.Navigator>
      <BasketStack.Screen name="BasketView" component={BasketView}/>
    </BasketStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator 
            tabBar={props => <TabBar {...props}/>}
            initialRouteName = "MainTab"
            tabBarOptions={{
              activeTintColor: StyleGuide.colors.white,
              inactiveTintColor: StyleGuide.colors.grey,
              showLabel: false
            }}  
          >
              <Tab.Screen 
                name='BasketTab' 
                component={BasketStackScreen}
              />
              <Tab.Screen 
                name='FavoritesTab' 
                component={FavoritesStackScreen}
              />
              <Tab.Screen 
                name='MainTab' 
                component={HomeStackScreen}
              />
              <Tab.Screen 
                name='NotificationsTab' 
                component={NotificationsStackScreen}
              />
              <Tab.Screen 
                name='CabinetTab' 
                component={CabinetStackScreen}
              />
          </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
