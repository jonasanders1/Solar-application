
import { Text, View, StyleSheet} from 'react-native'
import Assets from '../../Assets'
import Header from '../../components/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CategoryButton from '../../components/CategoryButton'
import PlanetCard from '../../components/PlanetCard'



const HomePage: React.FC = () => {
  return (

    <View style={styles.container}>
        <Header />
        
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <View style={styles.categoriesList}>
            <CategoryButton label='Stars' Icon={Assets.icons.Stars} color='blue'/>
            <CategoryButton label='Asteroids' Icon={Assets.icons.Asteroids} color='pink'/>
            <CategoryButton label='Planets' Icon={Assets.icons.Planets} color='yellow'/>
            <CategoryButton label='Planets' Icon={Assets.icons.Planets} color='cyan'/>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Planets</Text>
          <View style={styles.categoriesList}>
            <PlanetCard label="Mercury" PlanetImage={Assets.images.Mercury} />
            <PlanetCard label="Venus" PlanetImage={Assets.images.Venus} />
            <PlanetCard label="Earth" PlanetImage={Assets.images.Earth} />
            <PlanetCard label="Mars" PlanetImage={Assets.images.Mars} />
            <PlanetCard label="Jupiter" PlanetImage={Assets.images.Jupiter} />
            <PlanetCard label="Saturn" PlanetImage={Assets.images.Saturn} />
          </View>
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
        alignItems: "center",
    },
    bgImage: {
        position: "absolute",
        zIndex: -1,
        backgroundColor: "black"
    },
    categoryContainer: {
      marginTop: 30,
      gap: 10
    },
    categoryTitle: {
      color: "white"
    },
    categoriesList: {
      flexDirection: "row",
      gap: 16,
      
    }
})