import { StyleSheet,View,TouchableOpacity,Text } from "react-native";

export default function BackBtn({onPress}){
    return(
        <View style={styles.Backcontent}>
            <TouchableOpacity 
             onPress={onPress}>
            <View>
                <Text style={{textAlign:"center",paddingTop:10,fontsize:20}} >{"<"}</Text>
            </View>
            </TouchableOpacity>
         </View>
    )
}

const styles=StyleSheet.create({
    Backcontent:{
        alignSelf:"flex-start",
        height:50,
        width:50,
        borderColor:"black",
        borderWidth:1,
        borderRadius:50
    }
})