import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import ProgrammingLanguageCard, { style } from './components/PLCard';
import { programmingLangList } from './src/data/programmingLang';


export default function App() {
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