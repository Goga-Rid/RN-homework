import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 10,
  },
});

const ProgrammingLanguageCard = ({ languageName, experienceYears, imageURL }) => {
  return (
    <View style={style.container}>
      <Image source={{ uri: imageURL }} style={style.imagePL} />
      <Text style={style.titleText}>{languageName}</Text>
      <Text>Опыт изучения: {experienceYears} </Text>
    </View>
  );
};

export default ProgrammingLanguageCard;