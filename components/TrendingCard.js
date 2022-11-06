import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import RecipeCardInfo from './RecipeCardInfo'

export default function TrendingCard({ containerStyle, recipeItem, onPress }) {
  return (
    <TouchableOpacity
    style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius:SIZES.radius,
        ...containerStyle
    }}
    onPress={onPress}
    >
        <Image 
        source={{uri:`${recipeItem.strMealThumb}`}} 
        resizeMode="cover"
        style={{
            width: 250,
            height: 350,
            borderRadius: SIZES.radius
        }}
         />

         <View
         style={{
            position:"absolute",
            top: 20,
            left:15,
            paddingHorizontal:SIZES.radius,
            paddingVertical: 5,
            backgroundColor:COLORS.transparentGray,
            borderRadius:SIZES.radius
         }}
         >
            <Text
            style={{
                color:COLORS.white,
                ...FONTS.h4
            }}
            >
                {recipeItem.strCategory}
            </Text>
         </View>

         <RecipeCardInfo 
         recipeItem={recipeItem}
         />
    </TouchableOpacity>
  )
}