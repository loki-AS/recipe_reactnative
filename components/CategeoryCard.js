import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

export default function CategeoryCard({containerStyle, categoryItem, onPress}) {
  return (
    <TouchableOpacity
    style={{
      flexDirection:"row",
      alignItems:"center",
      padding: 10,
      marginTop: 10,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.gray2,
      ...containerStyle
    }}
    onPress={onPress}
    >
      <Image 
      source={{uri:`${categoryItem.icon}`}}
      resizeMode="cover"
      style={{
        width: 100,
        height: 100,
        borderRadius: SIZES.radius
      }}
      />
      <View
      style={{
        width:'65%',
        paddingHorizontal: 20
      }}
      >
        <Text
        style={{
          flex: 1,
          ...FONTS.h2
        }}
        >
          {categoryItem.category}
        </Text>
        <Text
        style={{
          color: COLORS.gray,
          ...FONTS.body4
        }}
        >{categoryItem.description}</Text>
      </View> 
    </TouchableOpacity>
  )
}