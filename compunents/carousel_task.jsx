import { View,Text, FlatList } from "react-native";
import { useState } from "react";

export default function CarouselTask(){
const[currentIndex,setcurrentIndex]=useState(3)
    return (
        <FlatList
        horizontal = {true}
        data={[1,2,3,4,5,6,7,8,9,10]}
        
        renderItem={({item})=>{
        
            return  (
                <View style={{width:currentIndex==item ? 50 : 10,height:10, backgroundColor:"red", margin:10}} />
        
            )
        }}
        />
    )
}