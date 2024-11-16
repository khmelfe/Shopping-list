import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
    imagesource : any;//where the image is.
}

export default function Headerimage({imagesource}:Props){
    return <Image source={imagesource} style = {styles.headerimages} contentFit="cover"/>;
}

//
const styles = StyleSheet.create({
    headerimages :{
        width: '100%',
        height: '100%',
        position:'absolute',
    },
})
//contentfit:
//contain -> I want the entire image,but might have empthy spaces.
//cover -> i want to cover the entire space,but might crop the image.