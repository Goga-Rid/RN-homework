import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageCard = ({ languageName, experienceYears, imageURL: uri }) => (
  <View style={style.container}>
    <Image source={{ uri }} style={style.image} />
    <Text style={style.title}>{languageName}</Text>
    <Text style={style.secondary}>
      {`Опыт изучения (в годах): ${experienceYears}`}
    </Text>
  </View>
);

export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bcf7e8',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    imagePL: {
      width: 200,
      height: 200,
      marginBottom: 10,
      resizeMode: 'contain',
    },
    titleText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    secondaryText: {
      fontSize: 15,
      marginBottom: 15,
    },
  });

export default ProgrammingLanguageCard;