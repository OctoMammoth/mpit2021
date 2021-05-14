import NavSide from './../components/NavSide/NavSide'
import { StyleSheet, View } from 'react-native'

const Dashboard = (props) => {
    // console.log(props)
    return (
        <View style={styles.body}>
            <NavSide active={"dashboard"} navigation={props.navigation} />
            dashboard
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

// Dashboard.path = "";
// Dashboard.navigationOptions = {
//   title: "Портфель",
//   linkName: "dashboard"
// };

export default Dashboard
