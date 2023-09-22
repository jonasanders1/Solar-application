import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgProps } from 'react-native-svg'
import Assets from '../../Assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type PlanetCardProps = {
    label: string,
    PlanetImage: React.FC<SvgProps>
}

const PlanetCard : React.FC <PlanetCardProps> = ({label, PlanetImage}) => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <PlanetImage style={styles.image} width={164} height={164}/>

            <View style={styles.footer}>
                <Text style={styles.label}>{label}</Text>
                <Assets.icons.OrangeForward/>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.brandBackground,
        borderRadius: 8,
        overflow: "hidden",
        justifyContent: "space-between",
        height: 190, 
        width: 140
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bottom: 6,
    },
    image: {
        right: 35,
        bottom: 20
    },
    label: {
        color: "white"
    }

})

export default PlanetCard