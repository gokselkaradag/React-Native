import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ana Sayfa</Text>
        <Button
          title="Kurslarım"
          onPress={() => navigation.navigate('Kurslarım')}
        />
        <Button
          title="Kurs Bilgilerim"
          onPress={() => navigation.navigate('Kurs Bilgilerim')}
        />
    </View>
  )
}

const styles = StyleSheet.create({})