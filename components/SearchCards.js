import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import RecipeCardInfo from './RecipeCardInfo'
import SmallCard from './SmallCard'

export default function SearchCards({ recipeItem, onPress }) {
  return (
    <TouchableOpacity
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop: SIZES.radius,
        borderRadius:SIZES.radius,        
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
            left:80,
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

         <SmallCard
         recipeItem={recipeItem}
         />
    </TouchableOpacity>
  )
}