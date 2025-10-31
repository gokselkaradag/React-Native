import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information title="C# Eğitimi" imageSource={require('../../assets/C#.png')} desc= "Kapsamlı C# Eğitimi" />
      <Information title=".Net Eğitimi" imageSource={require('../../assets/.Net.png')} desc= "Kapsamlı .Net Eğitimi" />
      <Information title="MsSQL Eğitimi" imageSource={require('../../assets/MSSQL.png')} desc= "Kapsamlı MsSQL Eğitimi" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})