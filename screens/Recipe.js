import { View, Text, Animated, Image, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { images, COLORS, SIZES, FONTS, value, icons } from "../constants"

export default function Recipe({ navigation, route }) {

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
    let { recipe } = route.params
    setSelectedRecipe(recipe)
  }, [])

  return (
    <View
    style={{
      flex:1,
      backgroundColor:COLORS.white
    }}
    >
      <StatusBar translucent backgroundColor="transparent" />
    <ScrollView>
    <View
    style={{
      position:"absolute",
      zIndex:10,
      top:0,
      left:0,
      right:0,
      height:90,
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:SIZES.padding,
      paddingBottom: 10,
      marginTop:30
  }}
      >
        {/* Back button */}
        <TouchableOpacity
        style={{
            alignItems:"center",
            justifyContent:"center",
            height:35,
            width:35,
            borderRadius:18,
            borderWidth:1,
            borderColor:COLORS.lightGray,
            backgroundColor:COLORS.transparentBlack5
        }}
        onPress={() => navigation.goBack()}
        >
            <Image 
            source={icons.back}
            style={{
                width: 15,
                height:15,
                tintColor:COLORS.lightGray
            }}
            />
        </TouchableOpacity>

        {/* Bookmark */}
        <TouchableOpacity
        style={{
          alignItems:"center",
          justifyContent:"center",
          height:35,
          width:35
        }}
        >
          <Image source={icons.bookmark}
          style={{
            width:30,
            height:30,
            tintColor:COLORS.darkGreen
          }}
          />
        </TouchableOpacity>
      </View>

      <View
      style={{
        marginTop: -1000,
        paddingTop: 1000,
        alignItems:"center",
        overflow: "scroll"
      }}
      >
        <Image 
        source={{uri:`${selectedRecipe?.strMealThumb}`}}
        resizeMode="contain"
        style={{
          height: 400,
          width:"200%",
        }}
        />
      </View>

            {/* info */}

      <View
      style={{
        flex: 1,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.transparentGray,
        position:"absolute",
        zIndex:10,
        top:200,
        left:0,
        right:0,
        height:60,
        marginHorizontal:20
      }}
      >
        <Text
        style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          color:COLORS.gray2,
          textAlign:"center",
          paddingTop:10,
          fontSize:SIZES.h2
        }}
        >{selectedRecipe?.strMeal}</Text>
      </View>
      
      {/* description */}
      <View
      style={{
        marginHorizontal:10,
        marginTop:5,
      }}
      >
        <Text style={{color:COLORS.gray}} className="uppercase text-xl tracking-[3px] my-2 underline">instructions</Text>
        <Text className="text-sm">{selectedRecipe?.strInstructions}</Text>
      </View>

      {/* ingredients */}
      <View
      style={{
        marginHorizontal:10,
        marginTop:5,
      }}      
      >
        <Text style={{color:COLORS.gray}} className="uppercase text-xl tracking-[3px] my-2 underline">Ingredients</Text>
        <View
        style={{
          flex:1,
          flexDirection:"row",
        }}
        >
          <View
          style={{
            flex:1,
            justifyContent:"flex-start"
          }}
          >
            <Text>{selectedRecipe?.strIngredient1}</Text>
            <Text>{selectedRecipe?.strIngredient2}</Text>
            <Text>{selectedRecipe?.strIngredient3}</Text>
            <Text>{selectedRecipe?.strIngredient3}</Text>
            <Text>{selectedRecipe?.strIngredient4}</Text>
            <Text>{selectedRecipe?.strIngredient5}</Text>
            <Text>{selectedRecipe?.strIngredient6}</Text>
            <Text>{selectedRecipe?.strIngredient7}</Text>
            <Text>{selectedRecipe?.strIngredient8}</Text>
            <Text>{selectedRecipe?.strIngredient9}</Text>
            <Text>{selectedRecipe?.strIngredient10}</Text>
            <Text>{selectedRecipe?.strIngredient11}</Text>
            <Text>{selectedRecipe?.strIngredient12}</Text>
            <Text>{selectedRecipe?.strIngredient13}</Text>
            <Text>{selectedRecipe?.strIngredient14}</Text>
            <Text>{selectedRecipe?.strIngredient15}</Text>
            <Text>{selectedRecipe?.strIngredient16}</Text>
            <Text>{selectedRecipe?.strIngredient17}</Text>
            <Text>{selectedRecipe?.strIngredient18}</Text>
            <Text>{selectedRecipe?.strIngredient19}</Text>
            <Text>{selectedRecipe?.strIngredient20}</Text>
            </View>
          <View
          style={{
            flex:1,
            justifyContent:"flex-end"
          }}
          >
            <Text>{selectedRecipe?.strMeasure1}</Text>
            <Text>{selectedRecipe?.strMeasure2}</Text>
            <Text>{selectedRecipe?.strMeasure3}</Text>
            <Text>{selectedRecipe?.strMeasure3}</Text>
            <Text>{selectedRecipe?.strMeasure4}</Text>
            <Text>{selectedRecipe?.strMeasure5}</Text>
            <Text>{selectedRecipe?.strMeasure6}</Text>
            <Text>{selectedRecipe?.strMeasure7}</Text>
            <Text>{selectedRecipe?.strMeasure8}</Text>
            <Text>{selectedRecipe?.strMeasure9}</Text>
            <Text>{selectedRecipe?.strMeasure10}</Text>
            <Text>{selectedRecipe?.strMeasure11}</Text>
            <Text>{selectedRecipe?.strMeasure12}</Text>
            <Text>{selectedRecipe?.strMeasure13}</Text>
            <Text>{selectedRecipe?.strMeasure14}</Text>
            <Text>{selectedRecipe?.strMeasure15}</Text>
            <Text>{selectedRecipe?.strMeasure16}</Text>
            <Text>{selectedRecipe?.strMeasure17}</Text>
            <Text>{selectedRecipe?.strMeasure18}</Text>
            <Text>{selectedRecipe?.strMeasure19}</Text>
            <Text>{selectedRecipe?.strMeasure20}</Text>
            </View>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}