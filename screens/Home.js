import React, { useContext, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { images, COLORS, SIZES, FONTS, dummyData, icons } from "../constants"
import { CategeoryCard, TrendingCard } from "../components"
import { Recipes } from '../context';
import Toast from 'react-native-toast-message';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import recipeCategory  from "../constants/category"
import trendingFoods from '../constants/dummyData';

const Home = ({ navigation }) => {
  const[show, setShow] = useState(false)

  const { user } = useContext(Recipes)

  const logOut = () => {
    signOut(auth);
    Toast.show({
      type: 'success',
      text1: 'Logout successful',
      position:"bottom"
    })
    navigation.replace("Login")
  };


    return (
      <SafeAreaView
      style={{
        flex:1,
        backgroundColor:COLORS.white,
      }}
      >
        <ScrollView
        style={{
          color:COLORS.darkGreen
        }}
        >
        {/* Header */}

        <View
          style={{
            flexDirection:"row",
            marginHorizontal:SIZES.padding,
            alignItems:"center",
            height:60,
            marginTop:10,
          }}        
        >
          <View
          style={{
            flex:1,
          }}
          >
            <Text
            style={{
              color:COLORS.darkGreen,
              ...FONTS.h2
            }}
            >
              Hello, {user?.email } 
            </Text>
            <Text
            style={{
              marginTop: 3,
              color:COLORS.gray,
              ...FONTS.body3
            }}
            >What do you want to cook today?</Text>
          </View>
          {
          !show ? (
            <TouchableOpacity
            onPress={() => setShow(!show)}
            >
            <Image source={{uri:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}} style={{width:40, height:40, borderRadius:20}} />
            </TouchableOpacity>
          ): (
            <View>
            <TouchableOpacity
            onPress={() => setShow(false)}
            >
            <Image source={{uri:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}} style={{width:40, height:40, borderRadius:20}} />
            <TouchableOpacity
            onPress={logOut}
            >
              <Text
              style={{
                color:COLORS.darkGreen,
                ...FONTS.h4
              }}
              >
              Sign Out
              </Text>
            </TouchableOpacity>
            </TouchableOpacity>
            </View>
          )
          }
        </View>

        {/* search bar */} 

        {/* <View
        style={{
          flexDirection:"row",
          height: 50,
          alignItems: "center",
          marginHorizontal:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray
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
          />
        </View> */}

        {/* recipe card */}

        <View
        style={{
          flexDirection:"row",
          marginTop:SIZES.padding,
          marginHorizontal:SIZES.padding,
          borderRadius:10,
          backgroundColor:COLORS.lightGreen
        }}
        >
          <View
          style={{
            width:100,
            justifyContent:"center",
            alignItems:"center",
          }}
          >
          <Image 
          source={images.recipe}
          style={{
            width: 80,
            height: 80
          }}
          />
          </View>
          <View
          style={{
            flex:1,
            paddingVertical:SIZES.radius
          }}
          >
            <Text
            style={{
              width:"70%",
              ...FONTS.body4
            }}
            >
              Explore tasty recipes With Us !
            </Text>
            <TouchableOpacity
            style={{
              marginTop:10
            }}
            onPress={() => console.log("See recipes")}
            >
              <Text
              style={{
                color:COLORS.darkGreen,
                textDecorationLine:"underline",
                ...FONTS.h4
              }}
              >See Recipes</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* trending section */}
        <View
        style={{
          marginTop:SIZES.padding,
        }}
        >
          <Text
          style={{
            marginHorizontal:SIZES.padding,
            ...FONTS.h2
          }}
          >Trending section</Text>
          <FlatList 
          data={trendingFoods}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.idMeal}
          renderItem={({item, index}) => {
            return (
              <View>
                <TrendingCard 
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0
                }}
                recipeItem={item}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
                />
              </View>
            )
          }}
          />
        </View>

        {/* category header */}
        <View
        style={{
          flexDirection:"row",
          alignItems:"center",
          marginTop: 20,
          marginHorizontal:SIZES.padding
        }}
        >
            <Text
            style={{
              flex: 1,
              ...FONTS.h2
            }}
            >categories</Text>
          <TouchableOpacity>
            <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4
            }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {/* categories section */}
        <FlatList 
        data={recipeCategory}
        keyExtractor={(item) => {
          return item.id;
        }}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View></View>
        }
        renderItem={({item}) => {
          return (
            <>
            <CategeoryCard
            containerStyle={{
              marginHorizontal:SIZES.padding
            }} 
            categoryItem={item}
            />
            </>
          )
        }}
        ListFooterComponent={
          <View 
          style={{
            marginBottom: 100
          }}
          />
        }
        />
        </ScrollView>
      </SafeAreaView>
    )
}

export default Home;