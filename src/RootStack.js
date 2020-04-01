import React, { Component } from 'react';
import { View, Text } from 'react-native';

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

export default RootStack;