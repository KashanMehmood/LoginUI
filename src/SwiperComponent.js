import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class SwiperComponent extends Component {
    render() {
        return (
            <Swiper
                loop={true}
                style={styles.container}
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
});

export default SwiperComponent;