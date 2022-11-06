import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function Register({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const provider = new GoogleAuthProvider();

  const handleSubmit = async() => {
    if(password !== confirmPassword){
      Toast.show({
        type: 'error',
        text1: 'Password doesnot match',
        position:"bottom"
      })
      return;
    }
    else if(email == "" || password == "" || confirmPassword == ""){
      Toast.show({
        type: 'error',
        text1: 'Enter all the Fields',
        position:"bottom"
      })
      return;
    }
    else if(password && confirmPassword <= 6){
      Toast.show({
        type: 'error',
        text1: 'Password should be more than 6 characters',
        position:"bottom"
      })
      return;      
    }
    else if (email === "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i") {
      Toast.show({
        type: 'error',
        text1: 'Incorrect Email',
        position:"bottom"
      })
      return;        
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log(result.user.email)
      Toast.show({
        type: 'success',
        text1: `Sign Up Successful. Welcome ${result.user.email}`,
        position:"bottom"
      })
      navigation.replace("Home")
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error.message,
        position:"bottom"
      })
    }
  }

  const SignInWithGoogle = () => {
    signInWithRedirect(auth, provider)
    .then((result) => {
      Toast.show({
        type: 'success',
        text1: `Sign Up Successful. Welcome ${result.user.email}`,
        position:"bottom"
      })
      navigation.replace("Home")
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <View
    className="flex-1 bg-black"
    >
    <StatusBar barStyle="light-content" />
    <View
    style={{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        height:90,
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingHorizontal:SIZES.padding,
        paddingBottom: 10,
        marginTop:10
    }}
    >
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
        onPress={() => navigation.navigate("Login")}
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
    </View>

    <View
    style={{
      alignItems:"center",
      marginHorizontal:"auto",
      justifyContent:"center",
      marginTop:100
    }}
    >
        <Image source={images.logo} alt="mypic" className="h-56 w-56" resizeMode='contain' />
    </View>

    <View>

        {/* email */}
    <View
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
          <MaterialIcons name="email" size={24} color="gray" />
          <TextInput 
          style={{
            marginLeft:SIZES.radius,
            ...FONTS.body3
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Enter your Email..."
          value={email}
          onChangeText={text => setEmail(text)}
          />
        </View>

        {/* password */}

        <View
        style={{
          flexDirection:"row",
          height: 50,
          alignItems: "center",
          marginHorizontal:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
          marginTop:15
        }}
        >
        <Entypo name="lock" size={24} color="gray" />
          <TextInput 
          style={{
            marginLeft:SIZES.radius,
            ...FONTS.body3
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Enter your Password..."
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          />
        </View>

        {/* confirm password */}

        <View
        style={{
          flexDirection:"row",
          height: 50,
          alignItems: "center",
          marginHorizontal:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
          marginTop:15
        }}
        >
        <Entypo name="lock" size={24} color="gray" />
          <TextInput 
          style={{
            marginLeft:SIZES.radius,
            ...FONTS.body3
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Confirm your Password..."
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          />
        </View>

        {/* button */}
        <TouchableOpacity
        style={{
            height: 50,
            alignItems: "center",
            marginHorizontal:SIZES.padding,
            paddingHorizontal:SIZES.radius,
            borderRadius: 10,
            backgroundColor: COLORS.darkGreen,
            marginTop:15
        }}
        onPress={handleSubmit}
        >
            <Text className="text-white text-2xl pt-2">Register</Text>
        </TouchableOpacity>

        {/* <View
        style={{
            marginTop:15,
            alignItems: "center",
        }}
        >
                <Text style={{color:COLORS.gray}} className="text-2xl pt-2">OR</Text>
        </View>

        {/* sign in with google */}

        {/* <TouchableOpacity
        style={{
          flexDirection:"row",
          height: 50,
          alignItems: "center",
          marginHorizontal:SIZES.padding,
          paddingHorizontal:SIZES.radius,
          borderRadius: 10,
          borderColor:COLORS.darkGreen,
          borderWidth:1,
          marginTop:15,
        }}
        onPress={SignInWithGoogle}
        >
        <AntDesign name="google" size={24} color="gray" className="px-3" />
        <Text
        style={{
            color:COLORS.gray   
           }}
           className="px-5 text-2xl"
        >|</Text>
        <Text 
        style={{
         color:COLORS.gray   
        }}
        className="px-2 text-2xl hover:scale-105"
        >Log in with Google</Text> 
        </TouchableOpacity> */}
    </View>
    </View>
  )
}