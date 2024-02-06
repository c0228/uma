import { StyleSheet, Text, View } from 'react-native';
import Span2 from "e-ui-react-native";
// import { AccordianTest } from "@AppComponent/Accordian/index.js";
import { AppRouting } from '@AppFeature/AppRouting/index.js';
import { HomeScreen } from "@AppPage/HomeScreen.js";
import { Page2Screen } from "@AppPage/Page2.js";
import 'react-native-gesture-handler';

const Span = ({ children })=>{
 return (<>
 <View>
  <Text>{children}</Text>
 </View>
 </>);
};

export default function App(){
// const App = () => {
  return (
    <>
    
     <AppRouting initialRouteName="Page2Screen" 
          data={[{ name:"Home", component: HomeScreen },
                { name:"Page2Screen", component: Page2Screen }]} />
    {/*<View>
    <StatusBar translucent backgroundColor="orange" style="auto" height="5%"  />
    <View style={styles.content}>
    
    </View>
    </View>*/}
    </>
  );
};

// AppRegistry.registerComponent('MyApp', () => App);

// export default App;

const styles = StyleSheet.create({
  content: {
    marginTop: '5%',
    backgroundColor: '#fff',
    paddingTop: '5%',
    paddingLeft:'2%',
    paddingRight:'2%'
  },
});

