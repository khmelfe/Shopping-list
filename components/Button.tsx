//Buttons!
import { StyleSheet,View,Pressable,Text,Dimensions, } from "react-native";
import React, { useState } from 'react';

//add functions !
type Props = {
    label:string,//Name of the button
    theme : string,//what type of button
    
}
//getting the size of the device so we would make the elements look the same.
const { width, height } = Dimensions.get('window');
const getResponsiveFontSize = (size) => {
    const baseWidth = 375; // Reference width for design
    const { width } = Dimensions.get('window');
    return (size * width) / baseWidth; // Dynamic font size
};


export default function Buttons({label,theme}:Props){
    const [maxHeight, setMaxHeight] = useState(0);

    const handleLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        if (height > maxHeight) {
            setMaxHeight(height);
        }
    };
    switch(theme){
    case  "": {
    return (
        <View onLayout={handleLayout} style = {[styles.buttonbottem,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18}]}>
            <Pressable
                style={[styles.button,{backgroundColor:"#fff"}]}
                onPress={() => alert('You pressed a button.')}>
                <Text style = {styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )}
    case "List History":{
        return(
            <View onLayout={handleLayout} style = {[styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18}]}>
          
            <View style = {styles.header} >
            <Text style ={styles.buttonLabel}>{theme}</Text> 
            </View>
            <View style={styles.horizontalLine} />
            <Pressable style= {styles.infocontainerbox}
            onPress={()=> alert('Sometimes you need to let go of the past..')}>
            <Text style={styles.buttonLabel}>
                Here You can see your last Shopping lists!{'\n'}
                Press here to see them.
            </Text>
            
            </Pressable>
        </View>
        )
    }
    case "favorites":{
        return(
            <View onLayout={handleLayout} style = {[styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18}]}>
                <View style = {styles.header} >
                    <Text style ={styles.buttonLabel}>{theme}</Text> 
                </View>
                <View style={styles.horizontalLine} />
                    <Pressable style={styles.infocontainerbox}
                        onPress={()=> alert('In the end we look for something famillier....')}>
                        <Text style ={styles.buttonLabel}>
                            we can see favorites
                        </Text>
                    </Pressable>
            </View>
        
        )
    }
    default:
        return null;
}

}


const styles = StyleSheet.create({
    buttonContainer:{
        //width:width *0.4,
        //height:height *0.1,
        marginHorizontal:10,
        alignItems:'center',
        padding: 3,
        flex:1,
        marginVertical: 10,
        
    },
    buttonbottem:{
         width:width *0.4,
        height:height *0.1,
        marginHorizontal:10,
        alignItems:'center',
        padding: 3,
        flex:1,
        marginVertical: 10,

    },
    textinfo:{
        color: '#000',
        fontSize: getResponsiveFontSize(14),
      
    },
    horizontalLine: {
        height: 1,
        width: '100%', 
        backgroundColor: '#000', 
        marginVertical: 2, 
      },
    button:{
        flex:1,
        borderRadius:10,
        width: '100%',
        height: '100%',
        alignItems : 'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#000000',
        fontSize: 18,
        
      },
      infocontainerbox : {
        flex:1,
       width:'auto',
       height:'auto',
       alignItems:'center',
        
    },
    header:{
        alignItems:'center',
        fontSize:18,
        backgroundColor:'#fff',
        
    },

} )
