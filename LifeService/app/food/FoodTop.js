import React,{Component} from 'react';
import { View,Text,StyleSheet,TextInput,Image,Dimensions} from 'react-native';

const {width,height}=Dimensions.get('window')
export default class FoodTop extends Component {   
  
    render() {
      return (
       <View style={styles.foodTop}>
           <Text style={{color:"#fff"}}>重庆市</Text>
           <View style={styles.searchBox}>
               <Image source={{uri:"ss"}} style={{width:40,height:40,borderRadius:20}} />
               <TextInput
                placeholder="请输入......"
                style={styles.txtInput}
                underlineColorAndroid="transparent"
               />
           </View>
           <Image source={{uri:"icon_user"}} style={{width:40,height:40}} />
       </View>
      );
    }
  }  
    const styles = StyleSheet.create({
      foodTop:{
        width:"100%",
        height:40,
        backgroundColor:"#FFD306",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
      },
     searchBox: {
      width: width-60-20-20,
      height:40,
      flexDirection:"row",
      borderRadius:15,
      alignItems:"center",
      paddingLeft:5,
      backgroundColor:"#fff"
    },
    txtInput:{
        height:40,
        width:80,
        borderRadius:10
    }
  }); 
