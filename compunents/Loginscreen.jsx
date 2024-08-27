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
import CheckBox from 'react-native-check-box';
import { useState } from "react";
export default function LoginScreen({navigation}) {
  const[isChecked,setChecked]=useState(false)
  return (
    <View style={styles.container}>
      
        
      <BackBtn
      onPress={()=>{navigation.goBack()}}/>
        
      <View style={styles.textcontent}>
        
        <Text style={{ color: "skyblue", fontSize: 30 }}>
          Sign In or Create Account
        </Text>
        <Text style={{ paddingTop: 15, color: "black", fontSize: 20 }}>
          join kidluu to start your journey with us.
        </Text>
      </View>
      <View style={styles.textcontent1}>
        
        <Text style={{ color: "darkblue", fontSize: 15, marginLeft: 8, }}>
          Enter mobile number or email
        </Text>
        <TextInput style={styles.intertext} />
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 30, alignSelf: "center" }}
      >
  <CheckBox
    isChecked={isChecked}
    onClick={()=>setChecked(!isChecked)}>
</CheckBox>
       
        <Text
          style={{
            color: "black",
            fontSize: 12,
            alignSelf: "center",
            marginStart: 5,
          }}
        >
          By signing up to Kidluu, your agree to our
          <Text style={{ color: "skyblue" }}> Terms & Conditions.</Text>
        </Text>
      </View>
      <View style={{height:"40%",width:"100%",justifyContent:"flex-end"}}>
        <MyButton title="Get OTP"
        onPress={()=>{ navigation.navigate("Otpscreen")}}/>
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
