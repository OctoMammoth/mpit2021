import NavSide from './../components/NavSide/NavSide'
import { StyleSheet, View } from 'react-native'

const Home = (props) => {
    // console.log(props)
    return (
        <View style={styles.body}>
            <NavSide active={"main"} navigation={props.navigation} />
            home
        </View>
    )
}

const styles = StyleSheet.create({
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
