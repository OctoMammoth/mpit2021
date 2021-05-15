import { useState } from 'react'
import { View, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native'

import Image1 from './images/hack_01.png'

const Dashboard = () => {
    const hackathons = [
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        }
    ]

    console.log(hackathons.length % 3)
    if (hackathons.length % 3 !== 0)
        for (let i = 0; i <= hackathons.length % 3; i++) hackathons.push({})

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View
                style={{
                    width: '100%',
                    display: 'flex'
                }}
            >
                <View
                    style={{
                        margin: 32,
                        padding: 16,
                        backgroundColor: '#342751',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        color: 'white',
                        overflow: 'hidden'
                    }}
                >
                    {/* Courses Wrapper */}
                    <View
                        style={{
                            paddingBottom: 16,
                            overflow: 'visible'
                        }}
                    >
                        {/* Text */}
                        <View>Курсы</View>
                        {/* Items */}
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            style={{
                                margin: 8,
                            }}
                        >
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <ImageBackground
                                    source={Image1}
                                    style={{
                                        width: 350,
                                        height: 300,
                                        borderRadius: 16,
                                        marginRight: 32,
                                    }}
                                ></ImageBackground>
                                <ImageBackground
                                    source={Image1}
                                    style={{
                                        width: 350,
                                        height: 300,
                                        borderRadius: 16,
                                        marginRight: 32,
                                    }}
                                ></ImageBackground>
                                <ImageBackground
                                    source={Image1}
                                    style={{
                                        width: 350,
                                        height: 300,
                                        borderRadius: 16,
                                        marginRight: 32,
                                    }}
                                ></ImageBackground>
                                <ImageBackground
                                    source={Image1}
                                    style={{
                                        width: 350,
                                        height: 300,
                                        borderRadius: 16,
                                        marginRight: 32,
                                    }}
                                ></ImageBackground>
                                <ImageBackground
                                    source={Image1}
                                    style={{
                                        width: 350,
                                        height: 300,
                                        borderRadius: 16,
                                        marginRight: 32,
                                    }}
                                ></ImageBackground>
                                <ImageBackground
                                    source={Image1}
                                    style={{
                                        width: 350,
                                        height: 300,
                                        borderRadius: 16
                                    }}
                                ></ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                    {/* Hackathons Wrapper*/}
                    <View
                        style={{
                            // paddingBottom: 16,
                            overflow: 'visible'
                        }}
                    >
                        {/* Text */}
                        <View>Хакатоны</View>
                        {/* Items */}
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            onTouchMove={true}
                            style={{
                                margin: 8,
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <ImageBackground
                                source={Image1}
                                style={{
                                    width: 330,
                                    height: 220,
                                    borderRadius: 16
                                }}
                            ></ImageBackground>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Dashboard
