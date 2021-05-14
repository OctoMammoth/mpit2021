import NavSide from './../components/NavSide/NavSide'
import { StyleSheet, View } from 'react-native'
import Hackathons from '../components/Hackathons'
import HackRightSide from '../components/HackRightSide'

const Home = (props) => {
    // console.log(props)
    return (
        <View style={styles.body}>
            <NavSide active={"main"} navigation={props.navigation} />
            <View style={styles.mainPage}>
                <View 
                style={{flex: 1,
                    display: 'flex', marginRight: 32, padding: 16, backgroundColor: "#342751",borderRadius: 8}}
                >
                    <Hackathons/>
                </View>
                <View>   
                    <HackRightSide/>
                    {/* <View
                    style={{width: 330, padding: 16, backgroundColor: "#342751", borderRadius: 8}}
                    >
                        Right Panel
                    </View> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainPage: {
        marginLeft: 32,
        marginRight: 32,
        marginTop: 48,
        marginBottom: 0,

        color: 'white',

        // backgroundColor: 'gray',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexGrow: 1,
        alignSelf: 'stretch'
    },
    body: {
        backgroundColor: '#322550',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'row'
    }
})

// Home.path = "";
// Home.navigationOptions = {
//   title: "Главная",
//   linkName: "Main"
// };

export default Home
