import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {Entypo} from "@expo/vector-icons"
import { useDarkMode } from '../../constants/DarkModeContext'
const SearchBar = (props) => {

    const {isDarkModeEnabled} = useDarkMode()
    
  return (
    <View style ={styles.mainCon}>
        <TextInput
        returnKeyType='done'
        style = {[styles.inputCon,
            {borderColor: isDarkModeEnabled ? "white" : "black"},
            {color: isDarkModeEnabled ? "white" : "black"},
        ]}
        placeholder='Search'
        placeholderTextColor={isDarkModeEnabled ? "white" : "gray"}
        maxLength={50}
        value= {props.value}
        onChangeText={props.onChangeText}
        />
        <Entypo 
        style = {styles.glass}
        size = {25}
        name = "magnifying-glass"
        color = {isDarkModeEnabled ? "white" : "black"}
         />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    mainCon:{
        justifyContent:"center",
        alignItems:"center",
        height: "6.5%",      
        width:"90%",
        position:"absolute",
        marginVertical:"5%",
        top:"7%",
    },
    inputCon:{
        width:"100%",
        height:"100%",
        borderRadius:100,
        paddingLeft:"12%",
        paddingRight:"5%",
        borderWidth:1.5,
    },
    glass:{
        position:"absolute",
        left:"3%",top:"25%"
    }
})