import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { BlurView } from '@react-native-community/blur'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { Recipes } from "../context"
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { setDoc, doc } from 'firebase/firestore'
import Toast from 'react-native-toast-message';

export default function RecipeCardInfo({ recipeItem }) {

    const {user, watchlist} = useContext(Recipes)

    const inWatchlist = watchlist.includes(recipeItem?.idMeal);

    const addToWatchlist = async() => {
        const foodRef = doc(db, "watchlist", user.uid);
        try{
            await setDoc(
                foodRef,
                { foods: watchlist ? [...watchlist, recipeItem?.idMeal] : [recipeItem?.idMeal] },
                { merge: true }
            )
            Toast.show({
                type: 'success',
                text1: `${recipeItem?.strMeal} Added to the Watchlist !`,
                position:"bottom"
              })
        }catch(error){
            Toast.show({
                type: 'error',
                text1: error.message,
                position:"bottom"
              })
        }
    }

    const removeFromWatchlist = async () => {
        const foodRef = doc(db, "watchlist", user.uid);
        try {
          await setDoc(
            foodRef,
            { coins: watchlist.filter((wish) => wish !== recipeItem?.idMeal) },
            { merge: true }
          );
    
          Toast.show({
            type: 'success',
            text1: `${recipeItem?.strMeal} Added to the Watchlist !`,
            position:"bottom"
          })
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error.message,
                position:"bottom"
              })
        }
      };

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
            {/* Bookmark */}

            {user && (
                <TouchableOpacity
                onPress={inWatchlist ? removeFromWatchlist : addToWatchlist}
                >
                    {inWatchlist ? <FontAwesome name="bookmark" size={24} style={{color:COLORS.darkGreen}} /> : <FontAwesome5 name="bookmark" size={24} style={{color:COLORS.darkGreen}} />}
                </TouchableOpacity>
            )}
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
        position:"absolute",
        bottom:10,
        left:10,
        rigth:10,
        height:100,
        width:225,
        paddingVertical:SIZES.radius,
        paddingHorizontal:SIZES.base,
        borderRadius:SIZES.radius
    }
})