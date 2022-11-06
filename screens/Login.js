import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { images, COLORS, SIZES, FONTS } from "../constants"
import { CustomButton } from "../components"

export default function Login({ navigation }) {

    function renderHeader() {
        return (
            <View
            style={{
                height: SIZES.height > 700 ? "65%" : "60%"
            }}
            >
                <ImageBackground
                source={images.loginBackground}
                style={{
                    flex: 1,
                    justifyContent: 'flex-end'
                }}
                resizeMode="cover"
                >
                    <LinearGradient
                    start={{x:0, y:0}}
                    end={{x:0, y:0}}
                    colors={[
                        COLORS.transparent,
                        'rgba(0,0,0,0.8)'
                    ]}
                    style={{
                        height: 200,
                        justifyContent: 'flex-end',
                        paddingHorizontal: SIZES.padding
                    }}
                    >
                        <Text
                        style={{
                           width:"80%",
                           color:COLORS.white,
                           ...FONTS.largeTitle,
                           lineHeight: 45 
                        }}
                        >
                           Cooking a Delicious Food Easily 
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    function renderDetail(){
        return (
            <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding
            }}
            >
                <Text
                style={{
                    marginTop:SIZES.radius,
                    width:"70%",
                    color: COLORS.gray,
                    ...FONTS.body3
                }}
                >
                    Discover more than 1200 food recipes in your hands and cooking it easily
                </Text>

                <View className="flex-1 justify-center">

                    {/* Login */}
                    <CustomButton 
                    buttonText="Login"
                    buttonContainerStyle={{
                        paddingVertical: 18,
                        borderRadius: 20
                    }}
                    colors={[COLORS.darkGreen, COLORS.lime]}
                    onPress={() => navigation.navigate("Auth")}
                    />

                    {/* singup */}
                    <CustomButton 
                    buttonText="Sign Up"

                    buttonContainerStyle={{
                        marginTop:SIZES.radius,
                        paddingVertical: 18,
                        borderRadius: 20,
                        borderColor:COLORS.darkLime,
                        borderWidth: 1
                    }}
                    colors={[COLORS.black, COLORS.black]}
                    onPress={() => navigation.replace("Register")}
                    />
                </View>
            </View>
        )
    }

  return (
    <View className="flex-1 bg-black">
        <StatusBar barStyle="light-content" /> 

        {renderHeader()}

        {renderDetail()}
    </View>
  )
}

const styles = StyleSheet.create({})