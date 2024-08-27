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
import { useState,useRef } from "react";
import PagerView from 'react-native-pager-view';
  
  export default function Dashboard({navigation}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pagerRef = useRef(null);

    const handlePageChange = (event) => {
        const newIndex = event.nativeEvent.position;
        setCurrentIndex(newIndex);
    };
    const banner = [
        {
            id: 1,
            photo: "2024-07-28-66a6a576b68f1.webp",
            banner_type: "",
            url: "https://shop.devdemo.tech/storage/app/public/kid_banner/2024-07-28-66a6a576b68f1.webp"
        },
        {
            id: 2,
            photo: "2024-08-05-66b07290821ed.webp",
            banner_type: "",
            url: "https://shop.devdemo.tech/storage/app/public/kid_banner/2024-08-05-66b07290821ed.webp"
        },
        {
            id: 3,
            photo: "2024-08-05-66b0732e00dfb.webp",
            banner_type: "",
            url: "https://shop.devdemo.tech/storage/app/public/kid_banner/2024-08-05-66b0732e00dfb.webp"
        }
    ]

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
           <View style={{backgroundColor:"white",borderRadius:75, color:"skyblue",width:"100%",}}>

           <View style={{margin:10, flexDirection:"row",width:"95%",}}>

                <TextInput style={{color:"skyblue", flex:0.9}} 
placeholder='Search anything...' 
placeholderTextColor={"skyblue"}  
                ></TextInput>
                <Image style={[styles.searchbtn]}
                source={require("..//assets/newproject/search.png")}>
                </Image>
                </View>
           </View>
           <View style={{height:"40%"}}>
           <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    onPageSelected={handlePageChange}
                    ref={pagerRef}
                >
                    {banner.map((item, index) => (
                        <View key={index} style={styles.page}>
                            <Image
                                resizeMode="contain"
                                style={styles.image}
                                source={{uri:item.url}}
                            />
                        </View>
                    ))}
                </PagerView>
                <View style={styles.dotsContainer}>
                {banner.map((item, index) => (
                    <View
                        key={item.id}
                        style={[
                            styles.dot,
                            { width: currentIndex === index ? 45 : 20 }
                        ]}
                    />
                ))}
            </View>
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
    searchbtn:{
        height:40,
        width:40,
    },
    pagerView: {
        flex: 1,
    },
    page: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    dot: {
        height: 10,
        backgroundColor: 'red',
        borderRadius:25,
        margin: 5,
    },
  }

)