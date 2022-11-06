import { View, Text, TextInput, Image, FlatList } from 'react-native'
import React, { useContext, useRef } from 'react'
import { images, COLORS, SIZES, FONTS, dummyData, icons } from "../constants"
import { Recipes } from '../context'
import SearchCards from '../components/SearchCards'

export default function Search({ navigation }) {

  const  { search, setSearch, meals, searchRecipe } = useContext(Recipes)

  const inputRef = useRef(null)

  return (
    <View>
        <View
        style={{
          flexDirection:"row",
          height: 50,
          alignItems: "center",
          marginHorizontal:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
          marginTop:10
        }}
        >
          <Image 
          source={icons.search}
          style={{
            width:20,
            height: 20,
            tintColor: COLORS.gray
          }}
          />
          <TextInput 
          style={{
            marginLeft:SIZES.radius,
            ...FONTS.body3
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
          value={search}
          onChangeText={text => setSearch(text)}
          onKeyPress={searchRecipe}
          ref={inputRef}
          />
        </View>
        <FlatList 
        data={meals}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => (
          <View
          styles={{
            flex:1,
          }}
          >
            <SearchCards 
            recipeItem={item}
            onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          </View>
        )}
        />
    </View>
  )
}