// Bottom navigation
// home
// calendar
// activity

import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
  } from 'react-native';
  
  export default function Dashboard({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
            <View>
           <Image style={styles.dp}
            source={require("..//assets/dp.png")}>
           </Image>
           </View>
           <View >
            <Text style={{fontSize:30,fontWeight:"bold",marginTop:15}}>Hi, Antony!</Text>
            <View style={{flexDirection:"row"}}>
            <Image style={styles.smallimage}
            source={require("..//assets/smiley.png")}>
           </Image>
           <Text style={styles.smalltext}>Happy</Text>
           <Image style={styles.smallimage}
            source={require("..//assets/star.png")}>
           </Image>
           <Text style={styles.smalltext}>24</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",right:0, margin:30, alignSelf:"center"}}>
            <Image style={styles.sidebtn}
            source={require("..//assets/notification.png")}>
           </Image>
           <Image style={styles.sidebtn}
            source={require("..//assets/setting.png")}>
           </Image>
           </View>
            </View>
            <View style={{margin:10}}>
            <TextInput style={{backgroundColor:"white",borderRadius:75}}></TextInput>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"skyblue"
    },
    profile:{
        flexDirection:"row",
    },
    dp:{
        height:60,
        width:60,
        borderRadius:100 ,
        margin:20   
    },
    smallimage:{
        height:25,
        width:25,
        marginRight:10,
        margin:5   
    },
    smalltext:{
        fontSize:15,
        fontWeight:"bold",
        marginTop:10,
        margin:5,
    },
    sidebtn:{
        height:40,
        width:40,
        borderRadius:100,
        backgroundColor:"skybblue",
        margin:5,
        borderColor:"black",
        borderWidth:2,
    },
  }

)