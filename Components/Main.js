import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text} from 'react-native';
import { IconButton } from 'react-native-paper';

import  Home  from './Home';
import  MyRequest  from './MyRequest';
import  TakeABreak  from './TakeABreak';
import  Setting  from './Setting';

function HomeNavigatorScreen() {
  const HomeNavigator = createStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <HomeNavigator.Screen name='Home' component={Home}
        options={({ navigation }) => ({
          headerTitle: 'Home',
          headerLeft: () => (<IconButton icon='menu' size={36} iconColor='#fff' style={{margin: 0}} onPress={() => navigation.toggleDrawer()} />)
        })} />
    </HomeNavigator.Navigator>
  );
}

function MyRequestNavigatorScreen() {
  const MyRequestNavigator = createStackNavigator();
  return (
    <MyRequestNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <MyRequestNavigator.Screen name='MyRequest' component={MyRequest}
        options={({ navigation }) => ({
          headerTitle: 'My Request',
          headerLeft: () => (<IconButton icon='menu' size={36} iconColor='#fff' style={{margin: 0}} onPress={() => navigation.toggleDrawer()} />)
        })} />
      {/* <MenuNavigator.Screen name='DishDetail' component={DishDetail}
        options={{
          headerTitle: 'Dish Detail'
        }} /> */}
    </MyRequestNavigator.Navigator>
  );
}

function TakeABreakNavigatorScreen() {
  const TakeABreakNavigator = createStackNavigator();
  return (
    <TakeABreakNavigator.Navigator
      initialRouteName='Contact'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <TakeABreakNavigator.Screen name='TakeABreak' component={TakeABreak}
        options={({ navigation }) => ({
          headerTitle: 'Take A Break',
          headerLeft: () => (<IconButton icon='menu' size={36} iconColor='#fff' style={{margin: 0}} onPress={() => navigation.toggleDrawer()} />)
        })} />
    </TakeABreakNavigator.Navigator>
  );
}

function SettingNavigatorScreen() { 
  const SettingNavigator = createStackNavigator();
  return (
    <SettingNavigator.Navigator
      initialRouteName='About'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <SettingNavigator.Screen name='Setting' component={Setting}
      options={({ navigation }) => ({
        headerTitle: 'Settings',
        headerLeft: () => (<IconButton icon='menu' size={36} iconColor='#fff' style={{margin: 0}} onPress={() => navigation.toggleDrawer()} />)
      })} />
    </SettingNavigator.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#7cc', height: 80, alignItems: 'center', flexDirection: 'row' }}>
        {/* <View style={{ flex: 1 }}>
          <Image source={require('./images/logo.png')} style={{ margin: 10, width: 80, height: 60 }} />
        </View> */}
        {/* <View style={{ flex: 2 }}> */}
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Chấm công</Text>
        {/* </View> */}
      </View>
      <DrawerItemList {...props} />
      {/* <DrawerItem label='Help'
        icon={({ focused, color, size }) => <Icon name='help' size={size} color={focused ? '#7cc' : '#ccc'} />}
        onPress={() => Linking.openURL('https://reactnavigation.org/docs/getting-started')} /> */}
    </DrawerContentScrollView>
  );
}

function MainNavigatorScreen() {
  const MainNavigator = createDrawerNavigator();
  return (
    <MainNavigator.Navigator initialRouteName='HomeScreen' drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <MainNavigator.Screen name='HomeScreen' component={HomeNavigatorScreen}
        options={{
          title: 'Home', headerShown: false,
          drawerIcon: ({ focused, size }) => (<IconButton icon='home' size= {size} iconColor={focused ? '#7cc' : '#ccc'} style={{margin: 0}}/>)
        }} />
      <MainNavigator.Screen name='MyRequestScreen' component={MyRequestNavigatorScreen}
        options={{
          title: 'My Request', headerShown: false,
          drawerIcon: ({ focused, size }) => (<IconButton icon='frequently-asked-questions' size= {size} iconColor={focused ? '#7cc' : '#ccc'} style={{margin: 0}}/>)
        }} />
      <MainNavigator.Screen name='TakeABreakScreen' component={TakeABreakNavigatorScreen}
        options={{
          title: 'Take A Break', headerShown: false,
          drawerIcon: ({ focused, size }) => (<IconButton icon='archive-clock' size= {size} iconColor={focused ? '#7cc' : '#ccc'} style={{margin: 0}}/>)
        }} />
      <MainNavigator.Screen name='SettingScreen' component={SettingNavigatorScreen}
        options={{
          title: 'Settings', headerShown: false,
          drawerIcon: ({ focused, size }) => (<IconButton icon='cog' size= {size} iconColor={focused ? '#7cc' : '#ccc'} style={{margin: 0}}/>)
        }} />
    </MainNavigator.Navigator>
  );
}

export default class Main extends Component{
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}