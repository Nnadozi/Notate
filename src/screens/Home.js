import { StyleSheet, View, SafeAreaView , FlatList,} from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/input/SearchBar'
import FormattedDate from '../constants/Date'
import IconButton from '../components/buttons/IconButton'
import AddButton from "../components/buttons/AddButton"
import { useNavigation} from '@react-navigation/native'
import CustomText from '../components/CustomText'
import NoteBody from '../components/NoteBody'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDarkMode } from '../constants/DarkModeContext'

const Home = () => {

  const {isDarkModeEnabled} = useDarkMode()

  const nav = useNavigation()
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const allKeys = await AsyncStorage.getAllKeys();
        const notesArray = await Promise.all(allKeys.map(async (key) => {
          const noteJSON = await AsyncStorage.getItem(key);
          const note = JSON.parse(noteJSON);
          return note;
        }));
        setNotes(notesArray.filter(note => note !== null)); 
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
  
    fetchNotes();
  }, []);

  const deleteNote = async (item) => {
    try {
      await AsyncStorage.removeItem(`Note of ${item.id}`);
      setNotes(prevNotes => prevNotes.filter(note => note.id !== item.id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  
  const searchQuery = (searchVal) => {
    if (!searchVal.trim()) {
      return notes;
    } else {
      const searchResults = notes.filter((item) => {
        return item.title.toLowerCase().includes(searchVal.toLowerCase());
      });
      return searchResults;
    }
  };

  return (
    <>
    <SafeAreaView backgroundColor = {isDarkModeEnabled ? "black" : "white"}/>
    <View  style = {[styles.con,{backgroundColor: isDarkModeEnabled ? "black" : "white"}]}>
      <CustomText fontWeight ="bold" position = "absolute" top = "8%" left="0%" width="100%" fontSize = {25} textAlign="center">{FormattedDate}</CustomText>
      <IconButton onPress = { () => nav.openDrawer()} name = "settings" top="6%" left="5%" size = {30}/>
      <SearchBar value = {search} onChangeText = {text => setSearch(text)}/>
      <View style={styles.noteContainer}>
          {notes.length > 0 ?
            <FlatList
              data={searchQuery(search)}
              renderItem={({ item }) =>
                <NoteBody title={item.title} desc={item.description} handleDelete = {() => deleteNote(item)} />
              }
              keyExtractor={(item) => item.id}
            /> :
            <CustomText fontWeight="bold" opacity = {0.25} fontSize={20} top="35%" left="40%">NO NOTES</CustomText>
          }
        </View>
      <AddButton onPress= { () => nav.navigate("CreateNote")}/>
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  noteContainer:{
    width:"100%",
    height:"80%",
    position:"absolute",
    top:"20%",
   },
   con:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
   }
})


