import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            borderColor: "",
            bgColor: "green",
        }
    }

    onFocus(value) {

        this.setState({
            borderColor: value,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <Text style={styles.small}>Signup with Email and Password</Text>

                <View style={[
                    styles.section,
                    {
                        borderColor: this.state.borderColor == 'email' ? '#3465d9' : '#6695e2'
                    }
                ]}>
                    <MaterialIcons
                        name="email"
                        size={22}
                        style={styles.icon}
                        style={[
                            styles.icon,
                            {
                                color: this.state.borderColor == 'email' ? '#3465d9' : '#6695e2'
                            }
                        ]}
                    />
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder="example@example.com"
                        onFocus={() => this.onFocus('email')}
                    />
                </View>

                <View style={[
                    styles.section,
                    {
                        borderColor: this.state.borderColor == 'password' ? '#3465d9' : '#6695e2'
                    }
                ]}>

                    <MaterialIcons
                        name="lock-outline"
                        size={22}
                        style={[
                            styles.icon,
                            {
                                color: this.state.borderColor == 'password' ? '#3465d9' : '#6695e2'
                            }
                        ]}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="••••••••••"
                        onFocus={() => this.onFocus('password')}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.forgetPasswordWrapper}>
                    <Text style={styles.forgetPassword} >Terms of Use & Privacy Policy.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login}>
                    <Text style={styles.loginText} >Signup</Text>
                </TouchableOpacity>

                <View style={styles.signupWrapper}>
                    <Text> Already have account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.signupText} > Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        // marginHorizontal: 15,
        backgroundColor: 'white'
    },

    title: {

        color: '#3465d9',
        textAlign: 'left',
        fontSize: 25,
        fontFamily: 'bold',
        paddingLeft: 20
    },

    small: {

        color: 'gray',
        textAlign: 'left',
        fontFamily: 'bold',
        paddingLeft: 20,
        marginBottom: 5
    },

    section: {

        marginTop: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        paddingLeft: 10,
    },

    icon: {

        paddingTop: 8,
        color: '#457edc',
    },

    textInput: {

        width: '90%',
        paddingLeft: 10,
    },

    forgetPasswordWrapper: {

        marginHorizontal: 19,
        marginTop: 10,
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: 25,
        fontWeight: "bold",
        color: '#3465d9',
    },

    forgetPassword: {

        fontSize:12,
        alignItems: 'flex-end',
        // color: 'gray',
        color: '#558adf',
    },

    login: {

        marginHorizontal: 15,
        marginTop: 10,
    },

    loginText: {

        marginTop: 5,
        backgroundColor: '#3465d9',
        color: 'white',
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 15
        // fontWeight: 'bold',
        // fontSize: 20,
        // backgroundColor: 'red',
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingRight: 30,
        // paddingLeft: 30,
    },

    signupWrapper: {

        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'green',
    },

    signupText: {

        fontSize: 15,
        color: '#3465d9',
    },
});

export default LoginComponent;