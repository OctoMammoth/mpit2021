import NavSide from './../components/NavSide/NavSide'
import { StyleSheet, View } from 'react-native'
import DashboardSide from '../components/DashboardSide'

const Dashboard = (props) => {
    // console.log(props)
    return (
        <View style={styles.body}>
            <NavSide active={"dashboard"} navigation={props.navigation} />
            <DashboardSide/>
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
