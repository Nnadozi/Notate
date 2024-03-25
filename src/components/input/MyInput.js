import { StyleSheet, TextInput, View,Text } from 'react-native'
import React from 'react'
import { useDarkMode } from '../../constants/DarkModeContext'
import CustomText from '../CustomText'
const MyInput = (props) => {
const {isDarkModeEnabled} = useDarkMode()
  return (
    <View style ={[styles.mainCon,{top:props.top,height:props.height}]}>
        <TextInput
        onChangeText={props.onChangeText}
        value = {props.value}
        returnKeyType= {props.returnKeyType}
        style = {[styles.inputCon,{borderRadius:props.borderRadius,paddingTop:props.paddingTop,paddingRight:props.paddingRight},
            {borderColor: isDarkModeEnabled ? "white" : "black"},
            {color: isDarkModeEnabled ? "white" : "black"},]}
        placeholder={props.placeholder}
        placeholderTextColor={isDarkModeEnabled ? "white" : "gray"}
        maxLength={props.maxLength}
        multiline = {props.multiline}
        />
        {props.showLimit ? 
        <CustomText left = "85%" fontWeight = "500">
            {props.length}/{props.maxLength}
        </CustomText> : null}
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
    mainCon:{
        justifyContent:"center",
        alignItems:"center",     
        width:"90%",
        position:"absolute",
        marginVertical:"5%",
    },
    inputCon:{
        width:"100%",
        height:"100%",
        paddingHorizontal:"5%",
        borderWidth:1.5,
    },
})