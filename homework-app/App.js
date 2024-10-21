import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ProgrammingLanguageCard, { style } from './components/PLCard';


export default function App() {
  return (
    <View style={style.container}>
      <ProgrammingLanguageCard
        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
        languageName="JavaScript"    
        experienceYears="2"
      />
      <StatusBar style="auto" />
    </View>
  );
}