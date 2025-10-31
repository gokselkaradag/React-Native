import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const courses = [
      {name: 'React Native', id: 1},
      {name: 'React Js', id: 2},
      {name: 'C#', id: 3},
      {name: '.Net', id: 4},
      {name: 'MsSQL', id: 5},
    ]
  return (
    <FlatList 
      data={courses}
      horizontal = {true}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>{
        return (
            <Text style={styles.content}>{item.name}</Text>
        );
      }}
    />
  )
}

const styles = StyleSheet.create({content: {
    fontSize: 20,
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 20,
  }})