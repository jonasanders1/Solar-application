import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import Assets from '../../Assets'
import { Fonts } from '../../Styles/StyleGuide'
const Header  = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.welcomeText}>
            <Text style={[{color: "white"}, Fonts.homeTitle()]}>Well met,</Text>
            <Text style={[Fonts.homeTitle(), {color: "#EA3CD2"}]}> friend</Text>
        </View>
        <Text style={{color: "white"}}>What are you going to learn today?</Text>
      </View>
        
        <TouchableOpacity>
            <Assets.icons.Settings />
        </TouchableOpacity>
    </View>
  )
}

export default Header 

const styles = StyleSheet.create({
  container : {
    marginTop: 10,
    zIndex: 5,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    width: "80%"

  },
  welcomeText: {
    flexDirection: "row",
  }
})

