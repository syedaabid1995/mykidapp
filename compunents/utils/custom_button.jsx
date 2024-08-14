import { StyleSheet,View,TouchableOpacity,Text } from "react-native";

export default function MyButton({title,onPress}){
    return(
        <View>
            <TouchableOpacity style={{alignItems:"center"}}
             onPress={onPress}>

             <View style={style.button}>
                 <Text style={{color:"black",textAlign:"center",padding:6}}>{title}</Text>
             </View>

             <View style={style.bgbutton}>
             </View>
            </TouchableOpacity>
         </View>
    )
}

const style = StyleSheet.create({
    button: {
      height:40,
      width: '80%',
      borderRadius: 20,
      backgroundColor: 'yellow',
    },
    bgbutton: {
      height:40,
      width: '80%',
      borderRadius: 20,
      backgroundColor: 'skyblue',
      zIndex: -1,
      position: 'absolute',
      marginTop: 5,
    },
  });
  