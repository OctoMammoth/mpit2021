import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const NavItem = (props) => {
    const [hover, setHover] = useState(false)

    const styles = {
        icon: {
            width: '20px',
            height: '20px',
            color: props.isActive ? 'rgb(100%,100%,100%)' : 'rgb(222,214,251)',
            opacity: props.isActive ? '95%' : '50%',
            paddingRight: '21px'
        },
        text: {
            color: props.isActive ? '#ffffff' : '#DED6FB',
            opacity: props.isActive ? '95%' : '50%',
            fontWeight: '600'
        },
        active: {
            backgroundColor: '#1E192F',

            zIndex: 2,

            // boxShadow: '0 4 16 322550',

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
            paddingTop: 14,
            width: '100%'
        },
        body: {
            backgroundColor: hover ? `rgba(37,30,61,1)` : `rgba(37,30,61,0)`,
            // backgroundColor: "red",

            marginBottom: 8,
            paddingBottom: 14,
            paddingTop: 14,
            width: '100%'
        },
        inside: {
            // margin:
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

            paddingLeft: '48px'
        }
    }

    return (
        <TouchableOpacity
            style={
                props.isActive
                    ? styles.active
                    : styles.body
            }
            onMouseEnter={() => {
                setHover(true)
            }}
            onMouseLeave={() => {
                setHover(false)
            }}
        >
            <div style={styles.inside}>
                <props.icon opacity={styles.icon.opacity} fill={styles.icon.color} style={styles.icon} />
                <div style={styles.text}>{props.title}</div>
            </div>
        </TouchableOpacity>
    )
}

export default NavItem
