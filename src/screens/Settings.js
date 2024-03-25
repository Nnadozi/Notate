import { SafeAreaView, StyleSheet, Text, View,Switch } from 'react-native'
import React,{useState} from 'react'
import Version from '../constants/Version'
import CustomText from "../components/CustomText"

const Settings = () => {
    const [darkMode,setDarkMode] = useState(false)
  return (
    <>
        <SafeAreaView backgroundColor = "white" />
        <View className = "flex-1 justify-center items-center">
            <CustomText fontWeight="bold" fontSize = {30} position = "absolute" top = "4%" left = "8%">Settings</CustomText>
            <CustomText fontSize = {20} position = "absolute" top = "12%" left = "8%">Dark Mode</CustomText>
            <CustomText position ="absolute" top= "95%" left="8%" fontSize = {16} fontWeight="400">{Version}</CustomText>
            <Switch
            trackColor={{  true: 'lightgreen' }}  
            value={darkMode}
            onValueChange={(value) =>{
              setDarkMode(value => !value);
            }}
            style={styles.switch} 
            />
        </View>
    </>
  )
}

export default Settings

const styles = StyleSheet.create({
    switch:{
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
        position:"absolute",
        top: "11.5%",
        left:"50%",
      }
})
