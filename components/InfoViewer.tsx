import { types } from "@babel/core";
import { Text ,StyleSheet} from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

type Props = {
    header_name:string;
}

export default function infocontainer({header_name}:Props){
    if(header_name === 'List History'){
        return(
            <View style = {styles.infocontainerbox}>
                <View style = {styles.header} >
                    <Text></Text>
                </View>
            </View>
        )
    }
    else{
        return(
            <View style = {styles.infocontainerbox}>
            <View style = {styles.header} >
                <Text>{header_name}</Text>
            </View>
            <View></View>
        </View>
        )
    }
}


const styles= StyleSheet.create({
    infocontainerbox : {
        flex:1,
    },
    header:{
        flex:1,
        
    }
})
 