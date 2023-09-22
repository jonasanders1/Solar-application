import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type CategoryButtonProps = {
    label: string,
    Icon: React.FC,
    color: "blue" | "yellow" | "pink" | "cyan"
}

const CategoryButton <CategoryButtonProps>= () => {
  return (
    <TouchableOpacity>
        <Text>
            Category Button
        </Text>
    </TouchableOpacity>
  )
}

export default CategoryButton
