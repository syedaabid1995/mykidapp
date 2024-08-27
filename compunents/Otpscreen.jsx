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
import { useRef } from "react";
export default function Otpscreen({navigation}) {
  const t1 = useRef();
  const t2 = useRef();
  const t3 = useRef();
  const t4 = useRef();
  const t5 = useRef();
  const t6 = useRef();

  return (
    <View style={styles.container}>
      
        
      <BackBtn
      onPress={()=>{navigation.goBack()}}/>
        
      <View style={styles.textcontent}>
        
        <Text style={{ color: "skyblue", fontSize: 30 }}>
          Enter 6-Digit OTP
        </Text>
        <Text style={{ paddingTop: 15, color: "black", fontSize: 20 }}>
          We've sent you One TimePassword (OTP)via SMS to +919047070224
        </Text>
      </View>
      <View style={{flexDirection:"row",alignSelf:"center",marginTop:50,justifyContent:"space-evenly"}}>
        <TextInput style={styles.intertext}
        maxLength={1}
        ref={t1}
        keyboardType="numeric"
        onChangeText={()=>{t2.current.focus()}}
/>
        <TextInput style={styles.intertext}
         maxLength={1} 
         keyboardType="numeric"
         ref={t2}
         onChangeText={()=>{t3.current.focus()}}/>
        <TextInput style={styles.intertext}
         maxLength={1}
        ref={t3}
        onChangeText={()=>{t4.current.focus()}}
         keyboardType="numeric"/>
        <TextInput style={styles.intertext}
         maxLength={1}
        ref={t4}
        onChangeText={()=>{t5.current.focus()}}
         keyboardType="numeric"/>
        <TextInput style={styles.intertext}
         maxLength={1}
         ref={t5}
         onChangeText={()=>{t6.current.focus()}}
         keyboardType="numeric"/>
        <TextInput style={styles.intertext}
         maxLength={1}
         ref={t6}
         onChangeText={()=>{}}
         keyboardType="numeric"/>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 30, justifyContent:"space-between" }}
      >
        <Text
          style={{
            fontSize: 12,
            alignSelf: "center",
            marginStart: 5,
            color: "skyblue"
          }}
        >
          180 seconds Left</Text>
          <Text style={{ color: "skyblue" }}> Resend OTP</Text>
      
      </View>
      <View style={{height:"40%",width:"100%",justifyContent:"flex-end"}}>
        <MyButton title="Next"
        onPress={()=>{ navigation.navigate("Setpin")}}/>
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
    intertext: {
      backgroundColor: "white",
      borderColor: "skyblue",
      borderWidth:2,
      borderRadius: 10,
      height:50,
      width:50,
      marginRight:5
    },
  });
  