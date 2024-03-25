import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from  "@expo/vector-icons"
import { useDarkMode } from '../../constants/DarkModeContext'
const AddButton = (props) => {
  const {isDarkModeEnabled} = useDarkMode()
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.75} style = {styles.con}>
      <Ionicons name="add" size={30} color= {isDarkModeEnabled ? "black" : "white"} />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    con:{
        padding:"3%",
        backgroundColor:"gray",
        borderRadius:"100%",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:"89s%",
        left:"82%",
        opacity:0.5
    }
})