import { StyleSheet,Text, View,Dimensions } from "react-native";
import Button from "@/components/Button";
import Headerimage from "@/components/headerimage";
import { StatusBar } from "expo-status-bar";
//Main.

//
const header_image = require('@/assets/images/partial-react-logo.png');
const { width, height } = Dimensions.get('window');

export default function Index() {
  
  return (
 
    <View style = {styles.container}>
         <View style = {styles.headerimg}>
          
          <Headerimage imagesource = {header_image}/>      
      </View>
      <View style = {styles.middlecontainer}> 
      <View style = {styles.leftHalf}/>
      <View style = {styles.infocontainer}>
        <View style = {styles.footerContainer}>
          <Button label="Show current list" theme="" />
          <Button label="List Histories" theme ="List History"/>
          <Button label="Special List" theme="favorites"/>          
        </View>
      </View>
      
      </View>

      <View style = {styles.bottemcontainer}>
      <Button  label="Start process" theme=""/>
      </View>    
      
      <StatusBar style="auto"/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0e536a',  
    //alignItems:'center',
    
  },
  leftHalf:{
    flex: 1, // Takes up 50% of the screen (left side)
    justifyContent: 'center',
    backgroundColor: '#5c7610',
    alignItems:'center',
    
    
  },
  infocontainer:{
    flex:1,
    width:'100%',
    alignItems:'center',
    paddingLeft:'50%',
    position:'absolute',
    right:'50%',
    bottom:'auto',
    backgroundColor:'#fff',
        justifyContent:'space-evenly',

  },
  middlecontainer:{
    flex:1,
    alignItems:'baseline',
    backgroundColor:'#5c7610',
    
    

  },
  footerContainer: {
    width:'80%',
    alignItems: 'center',
    
    

  },
  bottemcontainer:{
    flex:1,
    position: 'absolute',
    bottom:'5%',
    left:'50%',
    right:'50%',
    alignItems:'center',
    width:'auto',
    backgroundColor:'#fff',
  },
  headerimg:{
    width: '100%',//taking all the space!
    height: 100,
    position: 'relative',
    backgroundColor: '#fff',
  },
})