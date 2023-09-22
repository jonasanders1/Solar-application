
import { Text, View, StyleSheet} from 'react-native'
import Assets from '../../Assets'
import Header from '../../components/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CategoryButton from '../../components/CategoryButton'



const HomePage: React.FC = () => {
  return (

    <View style={styles.container}>
        <Header />
        <View>
          <CategoryButton />
        </View>
        <Assets.images.BackgroundApp style={styles.bgImage} />
    </View>
  )
}


export default HomePage

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.brandBackground,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    bgImage: {
        position: "absolute",
        zIndex: 0,
        backgroundColor: "black"
    }
})