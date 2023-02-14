import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {View} from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Library from './Screens/Library';
import Shorts from './Screens/Shorts';
import Subscriptions from './Screens/Subscriptions';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
            
                screenOptions={({ route }) => ({
                    tabBarStyle:{
                        backgroundColor:'#0d0d0d',
                        height:60,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        }else if(route.name=='Shorts'){
                            iconName = focused
                                ? 'videocam'
                                : 'videocam-outline'; 
                        }
                        else if(route.name=='Subscriptions'){
                            iconName = focused
                                ? 'md-folder-sharp'
                                : 'md-folder-outline'
                        }
                         else if (route.name === 'Library') {
                            iconName = focused ? 'clipboard-play-multiple' : 'clipboard-play-multiple-outline';
                        } 

                        // You can return any component that you like here!
                        if(route.name=='Home' || route.name=='Shorts' || route.name=='Subscriptions'){
                            return <Ionicons name={iconName} size={size} color={color} />;
                        }
                        else if(route.name=='Library'){
                            return <MaterialCommunityIcons name={iconName} color={color} size={size} />
                        }
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'lightgray',
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{title:''}} />
                <Tab.Screen name='Shorts' component={Shorts} options={{headerShown:false}} />
                <Tab.Screen name='Subscriptions' component={Subscriptions} options={{title:''}} />
                <Tab.Screen name="Library" component={Library} options={{title:''}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}