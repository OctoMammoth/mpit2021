import { View, ImageBackground, Text } from 'react-native'

import Image1 from './images/hack_01.png'

const HackRightSide = () => {
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
        }
    ]

    return (
        <View>
            <View
                style={{
                    width: 330,
                    padding: 16,
                    backgroundColor: '#342751',
                    borderRadius: 8,
                    marginBottom: 32
                }}
            >
                <View style={{ marginBottom: 8 }}>Рекомендации</View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: 200,
                        width: 220
                    }}
                >
                    <Text style={{ color: 'white', fontFamily: 'Jost', textAlign: 'center' }}>
                        Не найдено, пожалуйста заполните ваш профиль
                    </Text>
                </View>
            </View>
            <View style={{ width: 330, padding: 16, backgroundColor: '#342751', borderRadius: 8 }}>
                <View style={{ marginBottom: 8 }}>Новые хакатоны</View>
                <View>
                    {hackathons.map((item) => {
                        return (
                            <ImageBackground
                                source={item.image}
                                style={{
                                    opacity: !item.image ? 0 : 1,
                                    flexGrow: 1,
                                    flexBasis: 145,
                                    padding: 4,
                                    marginVertical: 8,
                                    backgroundColor: '#fff',
                                    borderRadius: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between',
                                    overflow: 'hidden',
                                }}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <View style={{ display: 'flex' }}>{item.maxHumanCount}</View>
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
                    })}
                </View>
            </View>
        </View>
    )
}

export default HackRightSide
