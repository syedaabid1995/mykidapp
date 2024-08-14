import React from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from "react-native";
import BackBtn from "./utils/custom_backbtn";
import MyButton from "./utils/custom_button";
export default function Setpin({navigation}) {
  return (
    <View style={styles.container}>
      <BackBtn
      onPress={()=>{navigation.goBack()}}/>
      <View style={styles.textcontent}>
        
        <Text style={{ marginTop:25,color: "skyblue", fontSize: 25 }}>
          Create Your 4-Digit security PIN
        </Text>
        
      </View>
      <View style={styles.textcontent1}>
        
        <Text style={{ color: "darkblue", fontSize: 15, marginLeft: 8, }}>
         Enter PIN
        </Text>
        <TextInput style={styles.intertext} />
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 15 }}>
 
       
        <Text
          style={{
            color: "black",
            fontSize: 12,
            justifyContent:"flex-start",
            marginStart: 5,
            color: "skyblue" 
          }}
        >
          Forgot pasword
        </Text>
      </View>
      <View style={{height:"40%",width:"100%",justifyContent:"flex-end"}}>
        <MyButton title="Confirm"
        onPress={()=>{ navigation.navigate("Loginscreen")}}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" ,height:"100%"},
  imagecontent1: { height: 30, width: 30 },
  textcontent: {
    alignSelf: "flex-start",
    marginLeft:30,
  },
  textcontent1: {
    alignSelf: "center",
    width: "90%",
    paddingTop:40
  },
  intertext: {
    backgroundColor: "white",
    borderBlockColor: "black",
    padding: 20,
    borderRadius: 50,
  },
});
