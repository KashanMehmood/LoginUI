import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SignUpComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SignUpComponent Component</Text>
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

export default SignUpComponent;