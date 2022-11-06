import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { COLORS, FONTS } from "../constants"

export default function CustomButton({ buttonText, buttonContainerStyle, colors, onPress }) {
  
    if(colors.length > 0){
        return (
            <TouchableOpacity
            onPress={onPress}
            >
                <LinearGradient
                start={{x:0, y:0}}
                end={{x:1, y:0}}
                colors={colors}
                style={{
                    ...buttonContainerStyle
                }}
                >
                <Text
                style={{
                    textAlign:"center",
                    color:COLORS.white,
                    ...FONTS.h3
                }}
                >{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }else{
        <TouchableOpacity
        onPress={onPress}
        style={{
            ...buttonContainerStyle
        }}
        >
            <Text
            colors={colors}
            style={{
                textAlign:"center",
                color:"red",
                ...FONTS.h3
            }}
            >{buttonText}</Text>
        </TouchableOpacity>
    }
  
    return (
    <View>
      <Text>CustomButton</Text>
    </View>
  )
}
