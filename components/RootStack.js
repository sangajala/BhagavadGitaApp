// import { createStackNavigator, createAppContainer } from 'react-navigation'; 
// import HomeScreen from '../screen/Home';
// import DetailsScreen from '../screen/Details';
import React from 'react';
import Button from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer,createStackNavigator} from '@react-navigation/stack';
import HomPage from './HomePage';
import SearchResults from './SearchResults';
import DetailsScreen from './DetailsScreen';
import VerseDetailsScreen from './VerseDetailsScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomPage}
        options={{ title: 'BHAGAVAD GITA'}}
      />
      <Stack.Screen
        name="Slokas"
        component={SearchResults}
        options={{ title: 'Slokas',listings:'' }}
      />
      <Stack.Screen
        name="Sloka Details"
        component={DetailsScreen}
        options={{ title: 'Sloka Details'}}
      />
       <Stack.Screen
        name="Verse Details"
        component={VerseDetailsScreen}
        options={{ title: 'Verse Details',
        headerLeft: false
        // visible: false,
        // headerRight: () => (
        //   <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#fff"
        //   />
        // )
      }}
        
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

// const RootNavigator = createAppContainer(RootStack);

export default RootStack;