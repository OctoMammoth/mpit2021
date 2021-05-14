import NavItem from './NavItem'

import { View, Image } from 'react-native'
import { Link } from '@react-navigation/native'

import { StyleSheet } from 'react-native'

import Logo from './images/logo.jsx'
import Main from './images/main.jsx'
import Message from './images/message.jsx'
import Person from './images/person.jsx'
import Suitcase from './images/suitcase.jsx'

import avatar from './../../images/avatar.png'

const NavSide = (props) => {
    const items = [
        {
            name: 'main',
            title: 'Главная',
            link: '/',
            icon: Main
        },
        {
            name: 'messages',
            title: 'Сообщения',
            link: '/chat',
            icon: Message
        },
        {
            name: 'profile',
            title: 'Профиль',
            link: '/profile',
            icon: Person
        },
        {
            name: 'dashboard',
            title: 'Портфель',
            link: '/dashboard',
            icon: Suitcase
        }
    ]

    items.forEach((e) => {
        if (e.name === (props.active || 'noActive')) e.isActive = true
        else e.isActive = false
    })

    // console.log(items)

    return (
        <View style={styles.body}>
            <View style={styles.up}>
                <View style={styles.logo}>
                    <Logo />
                </View>
                {items.map((object) => {
                    return (
                        <NavItem
                            title={object.title}
                            icon={object.icon}
                            isActive={object.isActive}
                            navigation={props.navigation}
                            link={object.link}
                        />
                    )
                })}
            </View>
            <View>
                <Link to="/profile">
                    <View
                        style={styles.profile}
                        onPress={() => props.navigation.navigate('profile')}
                    >
                        <Image source={avatar} alt={'avatar'} style={styles.avatar} />
                        <View>
                            <View>Иванов Иван</View>
                            <View style={{ color: '#fff', opacity: 0.5 }}>@iivan</View>
                        </View>
                    </View>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    profile: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,

        display: 'flex',

        flexDirection: 'row',

        alignItems: 'center',
        paddingLeft: 16,

        fontWeight: 600,
        color: 'rgba(255,255,255,0.95)',

        height: 72,
        backgroundColor: '#1E192F',
        fontSize: 14
    },
    logo: {
        alignItems: 'center',
        marginVertical: 52,
        color: '#ffffff'
    },
    up: {
        display: 'flex',
        flexDirection: 'column'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'space-between',

        width: 252,
        minHeight: '100vh',
        backgroundColor: '#1E192F',
        color: 'white',
        opacity: 0.95
    }
})

export default NavSide
