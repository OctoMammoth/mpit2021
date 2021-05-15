import { View, StyleSheet } from 'react-native'

import { Link } from '@react-navigation/native'

const NavItem = (props) => {

    const styles = StyleSheet.create({
        icon: {
            width: 20,
            height: 20,
            opacity: props.isActive ? 0.95 : 0.5,
            marginRight: 21
        },
        text: {
            color: props.isActive ? '#ffffff' : '#DED6FB',
            opacity: props.isActive ? 0.95 : 0.5,
            fontWeight: 600
        },
        active: {
            backgroundColor: '#1E192F',

            zIndex: 2,

            shadowColor: '#322550',
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity: 1,
            shadowRadius: 16,
            elevation: 10,

            marginBottom: 8,
            paddingBottom: 14,
            paddingTop: 14
        },
        body: {
            backgroundColor: `rgba(37,30,61,0)`,

            marginBottom: 8,
            paddingBottom: 14,
            paddingTop: 14,
            width: 1.0
        },
        inside: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

            paddingLeft: 48
        }
    })

    return (
        <Link to={props.link}>
            <View
                style={props.isActive ? styles.active : styles.body}
            >
                <View style={styles.inside}>
                    {/* {props.link} */}
                    <View style={styles.icon}>
                        <props.icon
                            opacity={props.isActive ? 0.95 : 0.5}
                            fill={props.isActive ? 'rgb(255,255,255)' : 'rgb(222,214,251)'}
                        />
                    </View>

                    <View style={styles.text}>{props.title}</View>
                </View>
            </View>
        </Link>
    )
}

export default NavItem
