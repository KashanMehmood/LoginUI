import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

class SwiperComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animationSignup: '',
            animationLogin: '',
        }
    }

    onIndexChanged(index) {
        if (index == 1) {
            this.setState({
                animationLogin: 'bounceInRight',
                animationSignup: 'bounceInLeft'
            });
        } else {
            this.setState({
                animationLogin: '',
                animationSignup: ''
            });
        }
    }

    render() {
        return (
            <Swiper
                loop={false}
                style={styles.container}
                dot={< View style={styles.dot} />}
                activeDot={< View style={styles.activeDot} />}
                onIndexChanged={(index) => { this.onIndexChanged(index) }}
            >

                {/* Slide 1 */}

                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={require('./asset/asset1.png')}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Cloud Storage</Text>
                        <Text style={styles.text}>
                            Meet your business challenges head on with cloud computing services from us.
                        </Text>
                    </View>
                </View>

                {/* Slide 1 End */}

                {/* Slide 2 */}

                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={require('./asset/asset2.png')}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Share Storage</Text>
                        <Text style={styles.text}>
                            Modernize your workloads on world-class infrastructure.
                        </Text>
                        <View style={styles.button}>

                            <Animatable.View

                                animation={this.state.animationSignup}
                                iterationCount={1}
                                delay={0}
                                duration={1500}
                                useNativeDriver
                                style={styles.tp}
                            >

                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignUpScreen')}
                                    style={{ marginRight: 10 }}
                                >

                                    <Text style={{

                                        borderColor: '#3465d9',
                                        borderWidth: 1,
                                        borderColor: '#3465d9',
                                        color: '#3465d9',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        textAlign: 'center',
                                        borderRadius: 50,
                                    }} >Sign Up</Text>
                                </TouchableOpacity>
                            </Animatable.View>

                            <Animatable.View
                                animation={this.state.animationLogin}
                                iterationCount={1}
                                delay={0}
                                duration={1500}
                                useNativeDriver
                                style={styles.tp}
                            >

                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                                    style={{ marginRight: 10 }}
                                >

                                    <Text style={{

                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        paddingRight: 30,
                                        paddingLeft: 30,
                                        backgroundColor: '#3465d9',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        textAlign: 'center',
                                        borderRadius: 50,
                                    }} >Login</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </View>
                    </View>
                </View>

                {/* Slide 2 End */}

                {/* Slide 3 */}

                <View style={styles.slide}>
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={require('./asset/asset3.png')}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Solve More With Cloud</Text>
                        <Text style={styles.text}>
                            
                            Build applications once and run them in hybrid and multi-cloud environments.
                        </Text>
                    </View>
                </View>

                {/* Slide 3 End */}

            </Swiper>
        );
    }
}

const styles = StyleSheet.create({

    container: {},
    slide: {

        flex: 1,
        backgroundColor: 'blue',
    },

    slide2: {

        flex: 1,
        backgroundColor: 'blue',
    },

    header: {

        flex: 1.3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {

        flex: 1,
        backgroundColor: 'white'
    },

    image: {

        width: '80%',
        height: '80%',
        // flex: 0.7,
        // backgroundColor: 'green',
    },

    title: {

        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: '#3465d9',
    },

    text: {

        textAlign: "center",
        fontSize: 16,
        color: '#686868',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        marginLeft: 30,
        marginRight: 30,
        // backgroundColor: 'green',
    },

    dot: {

        backgroundColor: 'gray',
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },

    activeDot: {

        backgroundColor: '#3465d9',
        height: 8,
        width: 12,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },

    button: {

        // backgroundColor: '#3465d9',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        flexDirection: 'row'
    },

    tp: {

        // backgroundColor: 'red',
        // marginRight: 10,
        // color: '#3465d9',
        // width: '30%',
        // textAlign: "center",
        // justifyContent: 'center',
    }
});

export default SwiperComponent;