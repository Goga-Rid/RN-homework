import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import ProgrammingLanguageCard, { style } from './components/PLCard';
import { programmingLangList } from './src/data/programmingLang';


export default function App() {
const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styleApp.containerApp}>
        <FlatList
        data={programmingLangList}
        renderItem={({item}) => <ProgrammingLanguageCard 
        style={style.container}
        imageURL={item.imageURL}
        languageName={item.name}  
        experienceYears={item.experienceYears}
      />}
        keyExtractor={item => item.id}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styleApp = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#95d0c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});