import { StyleSheet, TextInput, View,Text } from 'react-native'
import React from 'react'

const MyInput = (props) => {
  return (
    <View style ={[styles.mainCon,{top:props.top,height:props.height}]}>
        <TextInput
        onChangeText={props.onChangeText}
        value = {props.value}
        returnKeyType= {props.returnKeyType}
        style = {[styles.inputCon,{borderRadius:props.borderRadius,paddingTop:props.paddingTop,paddingRight:props.paddingRight}]}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        multiline = {props.multiline}
        />
        {props.showLimit ? <Text style={[styles.text, { top: props.smallTop }]}>{props.length}/{props.maxLength}</Text> : null}
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
        borderColor:"gray",
    },
    text:{
        position:"absolute",
        left:"85%",
        color:"gray",
    }
})