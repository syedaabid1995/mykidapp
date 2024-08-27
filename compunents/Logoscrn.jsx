import {View,Image} from 'react-native';
import Splashscrn from './Splashscrn';
import { useEffect, useState } from 'react';


export default function Logoscrn({navigation}){

   useEffect(()=>{

      setTimeout(()=>{
         navigation.navigate("Onboarding"),3000
      }, 3000)
   
   }, [])

   return(
   <View style ={{backgroundColor:"white"}}>
         <Image resizeMode='contain' style ={{height:"100%",width:"100%"}} source={require('./assets/mykidlogo.png')}/>
    </View>  
   )
}
