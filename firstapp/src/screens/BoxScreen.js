import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function BoxScreen() {
    const [colors, setColors] = useState([]);
    const randomColor = () =>{
       const red = Math.floor (Math.random() * 256);
       const green = Math.floor (Math.random() * 256);
       const blue = Math.floor (Math.random() * 256);
       return `rgb(${red}, ${green}, ${blue})`; 
    }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Kutu Ekle"
          onPress={() => {
            setColors([...colors, randomColor()]);
          }}
        />
        <Button
          title="Sıfırla"
          onPress={() => {
            setColors([]);
          }}
        />
      </View>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return(
                <View style={{ backgroundColor: item, height: 150, width: 150, marginVertical: 20 }} />
            );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  }
})