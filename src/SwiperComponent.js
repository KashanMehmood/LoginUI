import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class SwiperComponent extends Component {
    render() {
        return (
            <Swiper
                loop={true}
                style={styles.container}
                dot={< View style={styles.dot} />}
                activeDot={< View style={styles.activeDot} />}
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
                            Thank you for watching my video and hope to get more tips for the next videos better.
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
                            Thank you for watching my video and hope to get more tips for the next videos better.
                        </Text>
                        <View style={styles.button}>

                            <TouchableOpacity style={styles.tp}>
                                <Text style={{

                                    borderColor: '#3465d9',
                                    borderWidth: 1,
                                    borderColor: '#3465d9',
                                    color: '#3465d9',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    textAlign: 'center',
                                    borderRadius: 50,
                                }} >Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tp}>
                                <Text style={{

                                    backgroundColor: '#3465d9',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    textAlign: 'center',
                                    borderRadius: 50,
                                }} >Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Slide 2 End */}

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

        flex: 2,
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
        color: 'gray',
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

        marginRight: 10,
        color: '#3465d9',
        width: '30%',
        textAlign: "center",
        justifyContent: 'center',
    }
});

export default SwiperComponent;