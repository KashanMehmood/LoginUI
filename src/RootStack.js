import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import SwiperComponent from './SwiperComponent';

class RootStack extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>RootStack Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const AppNavigator = createStackNavigator({
    Home: { 
        screen: SwiperComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    SignUpScreen: { 
        screen: SignUpComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    LoginScreen: { 
        screen: LoginComponent,
        navigationOptions:{
            headerShown:false
        }
    }
  });

export default createAppContainer(AppNavigator); 