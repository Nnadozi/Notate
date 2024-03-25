import { StyleSheet, View, SafeAreaView, TouchableWithoutFeedback, Keyboard,Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../components/buttons/IconButton'
import LongButton from '../components/buttons/LongButton'
import MyInput from '../components/MyInput'
import CustomText from "../components/CustomText"
import AsyncStorage from '@react-native-async-storage/async-storage'

const CreateNote = () => {
  const nav = useNavigation()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const submitForm = async (title,description) =>{
      if (!title.trim()) {
        Alert.alert('Error', 'Title cannot be empty');
        return;
      }
      if (!description.trim()) {
        Alert.alert('Error', 'Description cannot be empty');
        return;
      }

      try {
        const id = Math.random().toString(36).substring(7); 
        const jsonValue = JSON.stringify({title:title,description:description,id: id });
        await AsyncStorage.setItem(`Note of ${id}`, jsonValue);
      } catch (e) {
        console.log(e)
      }
      nav.navigate("Home",{title:title,desc:description})
  }
  
  return (
    <>
      <SafeAreaView backgroundColor="white" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 items-center justify-center bg-white">
          <IconButton onPress={() => nav.goBack()} name="arrow-left" top="2%" left="5%" size={30} />
          <CustomText fontWeight="bold" position="absolute" top="8%" left="7%" fontSize={23}>Create Note</CustomText>
          <MyInput borderRadius={100} placeholder="Title" top="11%" height="6.5%" maxLength={50} paddingRight = "18%"
            value={title} length={title.length} onChangeText={text => setTitle(text)} returnKeyType="done" showLimit />
          <MyInput borderRadius={30} top="20%" height="60%" maxLength={1000} multiline paddingTop="5%" 
            value={description} length={description.length} onChangeText={text => setDescription(text)}
          />
          <LongButton title="Create" onPress={() => submitForm(title,description)} />
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default CreateNote

const styles = StyleSheet.create({})
