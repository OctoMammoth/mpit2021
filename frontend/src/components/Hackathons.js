import { useState } from 'react'
import { View, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native'

import Image1 from './images/hack_01.png'

const Hackathons = () => {
    const [filter, setFilter] = useState('all')

    const fitlers = [
        {
            name: 'all',
            text: 'все'
        },
        {
            name: 'newest',
            text: 'новые'
        },
        {
            name: 'nearest',
            text: 'ближайщие'
        }
    ]

    const hackathons = [
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
        {
            maxHumanCount: 3,
            prizeCount: '150000',
            date: 1621038600000,
            image: Image1
        },
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
        <View 
        // style={{display: "flex", alignItems: 'stretch'}}
        >

            <View
                style={{
                    flex: 1,
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // alignItems: "stretch"
                }}
            >
                <View>Хакатоны</View>
                <View
                    style={{
                        // maxWidth: '500px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        flexWrap: 'wrap'
                    }}
                >
                    {fitlers.map((obj) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    color: 'white',
                                    opacity: filter === obj.name ? 0.95 : 0.5,
                                    marginLeft: 16
                                }}
                                onPress={() => {
                                    setFilter(obj.name)
                                }}
                            >
                                {obj.text}
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <View style={{alignSelf: 'stretch'}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 16,
                        minWidth: '100%',
                        maxWidth: '100%',
                        // height: "100%",
                        height: "90.8vh",
                        display: 'flex',
                    }}
                >
                    <FlatList
                        style={{
                            // maxWidth: '100%',
                            // minWidth: '100%',
                            // backgroundColor: 'red',
                            // marginTop: 16,
                            flex: 1
                            // display: 'flex',
                            // flexDirection: 'row',
                            // flexWrap: 'wrap',
                            // justifyContent: 'space-between'
                        }}
                        data={hackathons}
                        numColumns={3}
                        renderItem={({ item }) => {
                            return (
                                <ImageBackground
                                    source={item.image}
                                    style={{
                                        opacity: !item.image ? 0 : 1,
                                        height: 1 + '4vmax',
                                        overflow: 'hidden',
                                        flexGrow: 1,
                                        flexBasis: 145,
                                        padding: 16,
                                        margin: 8,
                                        backgroundColor: '#fff',
                                        borderRadius: 16,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <View style={{ display: 'flex' }}>
                                            {item.maxHumanCount}
                                        </View>
                                        <View style={{ display: 'flex' }}>~{item.prizeCount}</View>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end'
                                        }}
                                    >
                                        {item.maxHumanCount}
                                    </View>
                                </ImageBackground>
                            )
                        }}
                    ></FlatList>
                </ScrollView>
            </View>
        </View>
    )
}

export default Hackathons
