import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import MyButton from './utils/custom_button';

export default function Splashscrn({navigation}) {
  return (
    <View style={{flex:1, backgroundColor: 'skyblue'}}>
      <View
        style={{height: '80%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={style.content}>Welcome to kidluu!</Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            padding: 10,
          }}>
          An innovative EdTech platform for Children with Special Needs
          fostering a supportive community of parents, therapists, and
          educators, offering affordable solutions to empower and transform
          lives globally.
        </Text>
        <View style={{height: '60%', backgroundColor: 'white'}}>
          <PagerView style={style.pagerView} initialPage={0}>
            <View key="1">
              <Image
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('./assets/kids1.png')}
              />
            </View>
            <View key="2">
              <Image
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('./assets/kids2.jpg')}
              />
            </View>
            <View key="3">
              <Image
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('./assets/kids3.png')}
              />
            </View>
          </PagerView>
        </View>
      </View>

      <View style={style.touchpad}>
        <View
          style={{
            margin: 30,
            alignself: 'center',
            flexDirection: 'row',
            height: 10,
          }}>
          <View
            style={{
              height: 5,
              width: 30,
              backgroundColor: 'skyblue',
              marginHorizontal: 5,
            }}></View>
          <View
            style={{
              height: 5,
              width: 30,
              backgroundColor: 'skyblue',
              marginHorizontal: 5,
            }}></View>
          <View
            style={{
              height: 5,
              width: 30,
              backgroundColor: 'skyblue',
              marginHorizontal: 5,
            }}></View>
        </View>
      <View style={{height:"40%",width:"100%"}}>
        <MyButton title="Get started"
        onPress={()=>{ navigation.navigate("Loginscreen")}}/>
      </View>
        
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  content: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
  },

  pagerView: {
    flex: 1,
  },

  touchpad: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  button: {
    width: '80%',
    borderRadius: 30,
    backgroundColor: 'yellow',
    paddingHorizontal: 80,
    Position:'absolute',
    marginTop:2,
  },
  bgbutton: {
    width: '80%',
    borderRadius: 30,
    backgroundColor: 'skyblue',
    paddingHorizontal: 80,
    zIndex: -1,
    position: 'absolute',
    marginTop: 5,
  },
});
