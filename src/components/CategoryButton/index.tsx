import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gradients } from '../../Styles/StyleGuide'
import { SvgProps } from 'react-native-svg'

type CategoryButtonProps = {
    label: string,
    Icon: React.FC<SvgProps>,
    color: "blue" | "yellow" | "pink" | "cyan"
}

const CategoryButton : React.FC<CategoryButtonProps> = ({label, Icon, color}) => {

    const Gradient = Gradients[color]
  return (
    <TouchableOpacity>
        <Gradient style={styles.constainer}>
        <Icon/>
        <Text style={styles.label}>{label}</Text>
        </Gradient>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    constainer: {
        borderRadius: 8,
        width: 75,
        height: 75,
        justifyContent:"center",
        alignItems:"center",
        gap: 10
    },
    label: {
        color: "white"
    }
})

export default CategoryButton
