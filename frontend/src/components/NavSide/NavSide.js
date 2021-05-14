import NavItem from './NavItem'

import { TouchableOpacity } from 'react-native'

import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as Main } from './images/main.svg'
import { ReactComponent as Message } from './images/message.svg'
import { ReactComponent as Person } from './images/person.svg'
import { ReactComponent as Suitcase } from './images/suitcase.svg'

import avatar from './../../images/avatar.png'

const NavSide = (props) => {
    const items = [
        {
            name: 'main',
            title: 'Главная',
            icon: Main,
            isActive: true
        },
        {
            name: 'messages',
            title: 'Сообщения',
            icon: Message
        },
        {
            name: 'profile',
            title: 'Профиль',
            icon: Person
        },
        {
            name: 'dashboard',
            title: 'Портфель',
            icon: Suitcase
        }
    ]

    items.forEach((e) => {
        if (e.name === (props.active || 'noActive')) e.isActive = true
        else e.isActive = false
    })

    console.log(items)

    return (
        <div style={styles.body}>
            <div style={styles.up}>
                <Logo style={styles.logo} alt={'logo'} />
                {items.map((object) => {
                    return (
                        <NavItem
                            title={object.title}
                            icon={object.icon}
                            isActive={object.isActive}
                        />
                    )
                })}
            </div>
            <TouchableOpacity style={styles.profile}>
                <img src={avatar} alt={'avatar'} style={styles.avatar} />
                <div>
                    <div>Иванов Иван</div>
                    <div style={{ color: '#fff', opacity: '50%' }}>@iivan</div>
                </div>
            </TouchableOpacity>
        </div>
    )
}

const styles = {
    avatar: {
        width: '36px',
        height: '36px',
        borderRadius: '18px',
        marginRight: '16px'
    },
    profileText: {
        
    },
    profile: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,

        display: 'flex',

        flexDirection: 'row',

        alignItems: 'center',
        paddingLeft: '16px',

        height: '72px',
        backgroundColor: '#1E192F',
        fontSize: '14px'
    },
    logo: {
        margin: '52px 0 52px 0',
        color: '#fff'
    },
    up: {
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'space-between',

        width: '252px',
        minHeight: '50vh',
        backgroundColor: '#1E192F',
        color: 'white',
        opacity: '95%'
    }
}

export default NavSide
