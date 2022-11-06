import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import { COLORS, FONTS, icons, SIZES } from '../constants'

export default function SmallCard({ recipeItem }) {
  return (
    <View
    style={{
        ...styles.recipeCardContainer,
        backgroundColor: COLORS.transparentGray
    }}
    >
        <View
        style={{
            flex:1
        }}
        >
        <View
        style={{
            flex:1,
            flexDirection:"row",
            justifyContent:"space-between"
        }}
        >
            <Text
            style={{
                width: "70%",
                color:COLORS.white,
                ...FONTS.h3,
                fontSize: 18
            }}
            >
                {recipeItem.strMeal}
            </Text>
            <Image 
            source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
            style={{
                width: 20,
                height: 20,
                marginRight: SIZES.base,
                tintColor: COLORS.darkGreen
            }}
            />
        </View>
            <Text
        style={{
            color:COLORS.lightGray,
            ...FONTS.h4
        }}            
        >
        {recipeItem.strTags}
        </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    recipeCardContainer:{
        // position:"absolute",
        // bottom:10,
        // left:80,
        // rigth:10,
        flex:1,
        position:"relative",
        bottom:140,
        height:120,
        width:225,
        paddingVertical:SIZES.radius,
        paddingHorizontal:SIZES.base,
        borderRadius:SIZES.radius
    }
})