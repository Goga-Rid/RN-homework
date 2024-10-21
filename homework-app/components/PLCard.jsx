import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageCard = ({ languageName, experienceYears, imageURL }) => {
  return (
    <View style={style.container}>
      <Image source={{ uri: imageURL }} style={style.imagePL} />
      <Text style={style.titleText}>{languageName}</Text>
      <Text style={style.secondaryText}>Опыт изучения(в годах): {experienceYears} </Text>
    </View>
  );
};

export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bcf7e8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagePL: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
    titleText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    secondaryText: {
      fontSize: 15,
    },
  });

export default ProgrammingLanguageCard;