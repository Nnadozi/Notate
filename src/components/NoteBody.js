import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import IconButton from './buttons/IconButton'
import { useNavigation } from '@react-navigation/native'

const NoteBody = (props) => {
  const nav = useNavigation()
  const alertPress = () => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        { text: 'Yes', onPress: () => props.handleDelete() },
        { text: 'No' }
      ]
    );
  }
  

  const { height } = Dimensions.get('window');

  return (
    <View style = {[styles.con,{height: height/4}]}>
      <CustomText color = "white" fontWeight = "bold" fontSize = {23}
      position = "absolute" top = "9%" left = "5%">{props.title}</CustomText>
      <CustomText color = "white" fontSize = {16} width = "90%"
      position = "absolute" top = "35%" left = "5%">{props.desc}</CustomText>
      <View style = {styles.divider}/>
      <IconButton color = "white" name = "x" size = {30} top = "8%" left = "88%" onPress = {() => alertPress()}/>
      <IconButton color = "white" name ="external-link"  size = {27} top = "8%" left = "80%" 
      onPress ={() => nav.navigate("NoteView",{title:props.title,desc:props.desc})}/>
    </View>
  )
}

export default NoteBody

const styles = StyleSheet.create({
  con:{
    width:"90%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
    borderRadius:30,
    marginVertical: "2%",
    alignSelf:"center"
  },
  divider:{
    backgroundColor:"white",
    width:"100%",
    height:"0.5%",
    position:"absolute",
    top:"30%"
  }
})